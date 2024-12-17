import React from "react";

import './Dialogs.css'
import Time from "../Time";
import MessageStatus from "../MessageStatus";
import DialogItem from "../DialogItem";



function Dialogs({items,userId}) {
    return (
         <div className={`dialogs`}>
           {
            items.toSorted((a,b)=>{
              let dateA = new Date(a.lastMessage.created_at),
              dateB = new Date(b.lastMessage.created_at)
              return dateB-dateA

            }).map((item,index)=>(
                <DialogItem 
                key={item._id}
                user={item.user}
                message={item.lastMessage}
                isMe={item.lastMessage.user._id===userId}
                unreaded={10}
                 />
            ))
           }
                     
                     
                     
         </div> 
         );
}

export default Dialogs;