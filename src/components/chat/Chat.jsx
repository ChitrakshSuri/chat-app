import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  console.log(text);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Arya Suri</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, veniam? Ipsum, voluptates? Similique debitis vero iusto,
              vitae maxime laboriosam fugiat temporibus explicabo, odit, magnam
              saepe beatae. Optio quasi provident.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, veniam? Ipsum, voluptates? Similique debitis vero iusto,
              vitae maxime laboriosam fugiat temporibus explicabo, odit, magnam
              saepe beatae. Optio quasi provident.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, veniam? Ipsum, voluptates? Similique debitis vero iusto,
              vitae maxime laboriosam fugiat temporibus explicabo, odit, magnam
              saepe beatae. Optio quasi provident.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, veniam? Ipsum, voluptates? Similique debitis vero iusto,
              vitae maxime laboriosam fugiat temporibus explicabo, odit, magnam
              saepe beatae. Optio quasi provident.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, veniam? Ipsum, voluptates? Similique debitis vero iusto,
              vitae maxime laboriosam fugiat temporibus explicabo, odit, magnam
              saepe beatae. Optio quasi provident.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, veniam? Ipsum, voluptates? Similique debitis vero iusto,
              vitae maxime laboriosam fugiat temporibus explicabo, odit, magnam
              saepe beatae. Optio quasi provident.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, veniam? Ipsum, voluptates? Similique debitis vero iusto,
              vitae maxime laboriosam fugiat temporibus explicabo, odit, magnam
              saepe beatae. Optio quasi provident.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://www.pexels.com/photo/snowy-winter-wonderland-in-lapland-finland-30433172/"
              alt="tasveer"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, veniam? Ipsum, voluptates? Similique debitis vero iusto,
              vitae maxime laboriosam fugiat temporibus explicabo, odit, magnam
              saepe beatae. Optio quasi provident.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="img" />
          <img src="./camera.png" alt="camera" />
          <img src="./mic.png" alt="mic" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
