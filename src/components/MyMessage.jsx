const MyMessage = ({message}) =>{
    if(message?.attachments?.length > 0){
        <img
            src={message.attachments[0].file}
            alt="message-attachments"
            className="messgae-image"
            style={{float: 'right'}}
        />
    }
    return(
        <div className="message" style={{float:'right', marginRight: '15px', color: 'white', backgroundColor:'#3B2A50'}}>
           {message.text}
        </div>
    )
}
export default MyMessage;