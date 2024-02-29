import React from 'react';
import './Styles/UpdateBlog.css'
function UpdateBlog(props) {
    return (
        <div className='update_blog_main'>
        <div className='update_blog_form_div'>
            <form className='update_blog_form'>
                <div className='update_input_div_one'>
                    <label className='update_blog_labels'>Title</label>
                    <input type="text" className='update_form_input_t1' placeholder='Blog Title'/>
                    <label className='update_blog_labels'>Introductory Paragraph</label>
                    <textarea cols="30" rows="10" className='update_blog_intro'></textarea>
                    <label className='update_blog_labels'>Blog Category</label>
                    <select className='update_blog_input_category'>
                        <option value="">Select Category</option>
                        <option value="Travel">Travel</option>
                        <option value="Education">Education</option>
                        <option value="Science">Science</option>
                        <option value="History">History</option>
                        <option value="World">World</option>
                        <option value="Current Affairs">Current Affairs</option>
                        <option value="Politics">Politics</option>
                        <option value="Sports">Sports</option>
                        <option value="Food">Food</option>
                    </select>
                    <label className='update_blog_labels'>Image One</label>
                    <input type="file" className='update_blog_input_file'/>
                    <label className='update_blog_labels'>Image Two</label>
                    <input type="file" className='update_blog_input_file'/>
                    <label className='update_blog_labels'>Image Three</label>
                    <input type="file" className='update_blog_input_file'/>
                    <label className='update_blog_labels'>Image Four</label>
                    <input type="file" className='update_blog_input_file'/>
                    {/* <input type="submit" className='update_blog_submit_btn' value='Publish Blog'/> */}
                </div>
                <div className='update_input_div_two'>
                    <label className='update_blog_labels'>Blog Content Paragraph One</label>
                    <textarea cols="30" rows="10" className='update_blogs_content'></textarea>
                    <label className='update_blog_labels'>Blog Content Paragraph Two</label>
                    <textarea cols="30" rows="10" className='update_blogs_content'></textarea>
                    <label className='update_blog_labels'>Blog Content Paragraph Three</label>
                    <textarea cols="30" rows="10" className='update_blogs_content'></textarea>
                    <input type="submit" className='update_blog_submit_btn' value='Update Blog'/>
                </div>
            </form>
        </div>
    </div>
    );
}

export default UpdateBlog;