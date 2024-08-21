import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class MongoService implements OnModuleInit, OnModuleDestroy {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  onModuleInit() {
    console.log('MongoService initialized');
    console.log('Mongoose connection state:', this.connection.readyState);

    // Check the current connection state and log the appropriate message
    if (this.connection.readyState === 1) {
      console.log('MongoDB connected');
    } else if (this.connection.readyState === 2) {
      console.log('MongoDB connecting');
    } else if (this.connection.readyState === 0) {
      console.log('MongoDB disconnected');
    } else if (this.connection.readyState === 3) {
      console.log('MongoDB disconnecting');
    }

    // Set up event listeners
    this.connection.on('connected', () => {
      console.log('MongoDB connected');
    });

    this.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    this.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

    // Attempt to connect if not already connected
    if (this.connection.readyState === 0) {
      this.connection
        .openUri(
          process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase',
        )
        .then(() => console.log('MongoDB connection established'))
        .catch((err) => console.error('MongoDB connection failed:', err));
    }
  }

  onModuleDestroy() {
    this.connection.removeAllListeners('connected');
    this.connection.removeAllListeners('error');
    this.connection.removeAllListeners('disconnected');
  }

  getConnectionStatus(): string {
    return this.connection.readyState === 1 ? 'Connected' : 'Disconnected';
  }
}
