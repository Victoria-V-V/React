import { useState } from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import Message from './Message'

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkedComment = message.replace(/viagra|xxx/ig, "***");
        setMessageList((prevState) => [...prevState, checkedComment]);
        setMessage("");
    }

    return (
        <>
            <Container>
                <Container style={{ padding: "0px" }}>
                    <div style={{ minHeight: '250px', border: '1px solid #ced4da', borderRadius: '0.375rem', overflowY: 'auto', textAlign: 'left', padding: '10px', display: 'flex', flexDirection: 'column-reverse', justifyContent: 'flex-end' }}>

                        {messageList.map((message, index) => <Message key={index} message={message}></Message>)}
                    </div>
                </Container>

                <FloatingLabel controlId="floatingTextarea1" label="Комментарии">
                    <Form.Control
                        as="textarea"
                        placeholder="Напишите комментарий"
                        style={{ height: '100px', marginTop: '10px', marginBottom: '10px' }}
                        value={message}
                        onChange={handleChange}
                    />
                </FloatingLabel>

                <Button variant="primary" type="submit"
                    style={{ float: 'right', minWidth: '150px' }}
                    onClick={handleSubmit}>
                    Отправить
                </Button>
            </Container>
        </>
    );
}

export default Chat;

