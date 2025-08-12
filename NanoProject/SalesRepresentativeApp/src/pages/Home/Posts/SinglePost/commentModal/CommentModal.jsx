import React from "react";
import { FaXmark } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const CommentModal = ({ isOpen, setIsOpen }) => {
  return (
    // comment modal
    <div
      id="commentModalContainer"
      style={{ display: `${isOpen ? "block" : "none"}` }}
    >
      <div id="commentModal">
        <div className="commentModalTop">
          <p>Comments</p>
          <span className="commentClose" onClick={() => setIsOpen(false)}>
            <FaXmark size={20} />
          </span>
        </div>
        <div className="commentWriting">
          <div className="commentBox">
            <textarea
              name="comment"
              placeholder="আপনার মতামত দিন..."
            ></textarea>
            <span className="submitComment">
              <IoSend size={20} color="#228b22" />
            </span>
          </div>
        </div>
        {/* all comments  */}
        <div className="allComments">
          {/* single comments */}
          <div className="singleComment">
            <div className="userImage">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt=""
              />
            </div>
            <div className="userComment">
              <h3>Tahmid Alam</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus sed molestias similique pariatur rerum doloribus
                perspiciatis, itaque eveniet omnis dolorem accusamus natus
                exercitationem sunt, ipsum, corporis magnam veniam officia
                incidunt!
              </p>
            </div>
          </div>
          {/* single comments */}
          <div className="singleComment">
            <div className="userImage">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt=""
              />
            </div>
            <div className="userComment">
              <h3>Tahmid Alam</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus sed molestias similique pariatur rerum doloribus
                perspiciatis, itaque eveniet omnis dolorem accusamus natus
                exercitationem sunt, ipsum, corporis magnam veniam officia
                incidunt!
              </p>
            </div>
          </div>
          {/* single comments */}
          <div className="singleComment">
            <div className="userImage">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt=""
              />
            </div>
            <div className="userComment">
              <h3>Tahmid Alam</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus sed molestias similique pariatur rerum doloribus
                perspiciatis, itaque eveniet omnis dolorem accusamus natus
                exercitationem sunt, ipsum, corporis magnam veniam officia
                incidunt!
              </p>
            </div>
          </div>
          {/* single comments */}
          <div className="singleComment">
            <div className="userImage">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt=""
              />
            </div>
            <div className="userComment">
              <h3>Tahmid Alam</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus sed molestias similique pariatur rerum doloribus
                perspiciatis, itaque eveniet omnis dolorem accusamus natus
                exercitationem sunt, ipsum, corporis magnam veniam officia
                incidunt!
              </p>
            </div>
          </div>
          {/* single comments */}
          <div className="singleComment">
            <div className="userImage">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt=""
              />
            </div>
            <div className="userComment">
              <h3>Tahmid Alam</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus sed molestias similique pariatur rerum doloribus
                perspiciatis, itaque eveniet omnis dolorem accusamus natus
                exercitationem sunt, ipsum, corporis magnam veniam officia
                incidunt!
              </p>
            </div>
          </div>
          {/* single comments */}
          <div className="singleComment">
            <div className="userImage">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt=""
              />
            </div>
            <div className="userComment">
              <h3>Tahmid Alam</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus sed molestias similique pariatur rerum doloribus
                perspiciatis, itaque eveniet omnis dolorem accusamus natus
                exercitationem sunt, ipsum, corporis magnam veniam officia
                incidunt!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
