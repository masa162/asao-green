import { defineCollection, z } from "astro:content";

/**
 * articles コレクション
 * --------------------------------------------------
 * - `image()` ビルダーが現在の Astro バージョンではまだ利用できないため、
 *   `z.any().optional()` に戻してビルドエラーを回避します。
 * - 変数（ImageMetadata）でも文字列パスでも受け取れる柔軟な型に。
 */
const articles = defineCollection({
  schema: z.object({
    /** 記事タイトル */
    title: z.string(),

    /** 記事概要（一覧カードなどで使用） */
    description: z.string(),

    /** 公開日（文字列でも Date でも OK） */
    pubDate: z.coerce.date(),

    /** アイキャッチ画像（ImageMetadata or 文字列） */
    image: z.any().optional(),

    /** タグ（任意） */
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
