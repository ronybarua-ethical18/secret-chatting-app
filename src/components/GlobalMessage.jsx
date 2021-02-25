const GlobalMessage = ({ lastMessage, message }) => {
    const isMyFirstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {isMyFirstMessage && (
                <div className="message-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}
            {
                message?.attachments?.length > 0 ? (
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachments"
                        className="messgae-image"
                        style={{ marginLeft: isMyFirstMessage? '4px' : '48px' }}
                    />
                ) : (
                        <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isMyFirstMessage? '4px' : '48px' }}>
                            {message.text}
                        </div>
                    )
            }
        </div>
    )
}
export default GlobalMessage;