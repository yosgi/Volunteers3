import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostRepository } from '../repositories/post.repository';
import { UserRepository } from '../repositories/user.repository';
import { ReviewRepository } from '../repositories/review.repository';
import { Post } from '../entities/post.entity';
import { User } from '../entities/user.entity';
import { Review } from '../entities/review.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: PostRepository,
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
    @InjectRepository(Review)
    private readonly reviewRepository: ReviewRepository,
  ) {}

  async getAllPosts() {
    return this.postRepository.find();
  }

  async getPostById(id: number) {
    return this.postRepository.findOne({
      where: { id },
      relations: ['reviews'],
    });
  }

  async createPost(draft: Partial<Post>) {
    const post = this.postRepository.create(draft);
    return this.postRepository.save(post);
  }

  async votePost(postId: number) {
    const post = await this.postRepository.findOne({
      where: { id: postId },
    });
    if (!post) throw new NotFoundException('Post not found');

    // post.votes += 1;
    // if (post.votes >= 5) {
    //   // Assign to a donator (could be random or specific logic)
    //   post.donator = await this.userRepository.findOne({
    //     where: { role: 'DONATOR' },
    //   });
    // }

    return this.postRepository.save(post);
  }

  async assignPost(postId: number, assigneeId: number) {
    const post = await this.postRepository.findOne({
      where: { id: postId },
    });
    const assignee = await this.userRepository.findOne({
      where: { id: assigneeId },
    });
    if (!post || !assignee)
      throw new NotFoundException('Post or Assignee not found');

    post.assignee_id = assignee.id.toString();
    return this.postRepository.save(post);
  }

  async completePost(postId: number) {
    const post = await this.postRepository.findOne({
      where: { id: postId },
    });
    if (!post) throw new NotFoundException('Post not found');

    // post.isCompleted = true;
    // post.completedAt = new Date();
    // post.payment = 100; // Example payment amount
    return this.postRepository.save(post);
  }

  async reviewPost(postId: number, draft: Partial<Review>) {
    const post = await this.postRepository.findOne({
      where: { id: postId },
    });

    if (!post) throw new NotFoundException('Post not found');

    const review = this.reviewRepository.create({
      post,
      ...draft,
    });
    return this.reviewRepository.save(review);
  }
}
