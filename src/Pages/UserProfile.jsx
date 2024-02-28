import React from 'react';
import UserCard from '../Components/UserCard';
import BlogCard from '../Components/BlogCard';
import './Styles/UserProfile.css'
function UserProfile(props) {
    return (
        <div>
           <UserCard/>
           <div className='user_blogs_parent'>
           <BlogCard title={'Holi and Vrindaavan'} image={'https://i.pinimg.com/originals/f3/62/87/f36287984d548035777b1ad97497c009.jpg'} subtitle={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates impedit neque recusandae, eum, qui ut error expedita dolores pariatur ex animi laboriosam ducimus a dicta cupiditate? Laboriosam consequatur maiores consectetur.'}/>
                <BlogCard title={'Rajasthans rich culture'} image={'https://www.gorajasthan.travel/blog/wp-content/uploads/2022/01/kalbeliya-ma-jivan-shaifaly-1-1200x675.jpg'} subtitle={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates impedit neque recusandae, eum, qui ut error expedita dolores pariatur ex animi laboriosam ducimus a dicta cupiditate? Laboriosam consequatur maiores consectetur.'}/>
                <BlogCard title={'Kashmir: Earths Heaven'} image={'https://images.pexels.com/photos/12750077/pexels-photo-12750077.jpeg?cs=srgb&dl=pexels-tauseef-khaliq-12750077.jpg&fm=jpg'} subtitle={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates impedit neque recusandae, eum, qui ut error expedita dolores pariatur ex animi laboriosam ducimus a dicta cupiditate? Laboriosam consequatur maiores consectetur.'}/>
                <BlogCard title={'Science and me'} image={'https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?size=626&ext=jpg&ga=GA1.1.1319243779.1708732800&semt=ais'} subtitle={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates impedit neque recusandae, eum, qui ut error expedita dolores pariatur ex animi laboriosam ducimus a dicta cupiditate? Laboriosam consequatur maiores consectetur.'}/>
           </div>
        </div>
    );
}

export default UserProfile;