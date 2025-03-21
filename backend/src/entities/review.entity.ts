import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  user_name: string;

  @Column({ nullable: true })
  comments: string;

  @Column({ nullable: true })
  created_at: Date;

  @ManyToOne(() => Post, (post) => post.reviews)
  post: Post;

  @Column({ type: 'int', default: 0 })
  score: number;
}
