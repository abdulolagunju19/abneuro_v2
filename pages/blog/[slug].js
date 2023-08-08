import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import readingTime from 'reading-time';

import PostLayout from '../../layouts/post';
import MDXComponents from '@/components/MDXComponents';

export default function BlogPage({ source, frontMatter }) {
    return (
        <div className= "animate__animated animate__fadeIn">
            <PostLayout frontMatter={frontMatter}>
                <MDXRemote {...source} components={MDXComponents} /> 
            </PostLayout>
        </div>
    )
}

//statically generate the paths
export async function getStaticPaths(){
    //get the markdown files
    const files = fs.readdirSync(path.join('data/blog'));

    //store the params object in paths object for each slug
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }));

    //paths is array with objects that have params, params is object with path
    //fallback at false means that if slug accessed does not exist, return 404 page
    return {
        paths,
        fallback: false
    }
}

//access the params
export async function getStaticProps({ params: { slug } }){
    const metaMarkdownFile = fs.readFileSync(path.join('data/blog', slug + '.mdx'), 'utf-8');

    const { data, content } = matter(metaMarkdownFile);  

    const mdxSource = await serialize(
        content,  
        { 
            mdxOptions: {
                rehypePlugins: [
                    rehypeCodeTitles,
                    rehypePrism
                ],
                format: 'mdx'
            },
            scope: data,
            parseFrontmatter: false 
        },
    );

    return {
        props: { 
            source: mdxSource, 
            frontMatter: {
                ...data,
                readingTime: readingTime(content).text,
            } 
        }
    }
}