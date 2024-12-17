import React from 'react';
import { Route } from 'react-router-dom';
import { Dialogs, Message , AudioPlayer} from '../../components';
// import AudioPlayer from '../../components/audio';


function Home() {
    return (
        <>
            <section className="home">
                
                <Dialogs userId={125} items={[
                    {
                        _id:"22d6a669fc9f22ea7cd6c51986131ed2",
                        user:{
                            _id:"22d6a669fc9f22ea7cd6c51986131ed2",
                            username: 'Bob2005',
                            avatar:'./avatar2.jpg',
                            isOnline:false
                        },
                        lastMessage:{
                            user:{
                                _id:"22d6a669fc9f22ea7cd6c51986131ed2",
                                username: 'Bob2005',
                                avatar:'./avatar2.jpg',
                            },
                            text:'Hello my dear friend',
                            isReaded:false,
                            created_at:'Tue Dec 17 2024 19:21:07',
                        }
                    },
                    {
                        _id: "52d6a669fc9f22ea7cd6c51986131ed0",
                        user:{
                            _id: "52d6a669fc9f22ea7cd6c51986131ed0",
                            username: 'John Smith',
                            avatar:'avatar1.jpg',
                            isOnline:true
                        },
                        lastMessage:{
                            user:{
                                _id:"52d6a669fc9f22ea7cd6c51986131ed0",
                                username: 'John Smith',
                                avatar:'avatar1.jpg',
                            },
                            text:'Good bie, my friend',
                            isReaded:true,
                            created_at:'Tue Mar 13 2024 23:21:07',
                        }
                    }
                ]}/>


                {/* <Message 
                    avatar={'avatar2.jpg'} 
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam id reiciendis, sequi molestias enim ab laborum quas ex eos." 
                    date='Sat Mar 16 2024 22:30:50'
                    ></Message>
                    <Message 
                    avatar={'avatar1.jpg'} 
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. " 
                    date='Sat Mar 16 2024 22:40:50'
                    isMe={true}
                    isReaded={true}
                    ></Message>
                    <Message 
                    avatar={'avatar2.jpg'} 
                    // text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quibusdam id reiciendis, sequi molestias enim ab laborum quas ex eos." 
                    date='Sat Mar 16 2024 22:30:50'
                    attachments={[
                        {
                            filename:'image.jpg',
                            url:'./image.jpg'
                        },
                        {
                            filename:'image.jpg',
                            url:'./avatar1.jpg'
                        },
                        // {
                        //     filename:'image.jpg',
                        //     url:'./image.jpg'
                        // }
                    ]}
                    ></Message>
                    <Message 
                    avatar={'avatar1.jpg'} 
                    isTyping
                    ></Message>
                    <Message 
                    avatar={'avatar2.jpg'} 
                    date='Sat Mar 22 2024 22:30:50'
                    audio='The Neighbourhood.mp3'
                    ></Message> */}
                    
            </section>
        </>
    );
}

export default Home;