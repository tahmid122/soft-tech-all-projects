import React from "react";

const SingleTraining = () => {
  return (
    <div id="singlePost" className="marginBottom">
      <div className="postTop marginBottom">
        <div className="ptImage">
          <img src="/logo.png" alt="post company image" />
        </div>
        <div className="ptDes">
          <h4>Welcome to nanoTech</h4>
          <p>12/12/2012 | 12:45</p>
        </div>
      </div>
      <div className="postDetails marginBottom">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          similique repellat laudantium amet illum! Consequatur sint quidem,
          culpa, reprehenderit expedita consectetur voluptatibus tenetur labore
          earum, sequi perferendis similique hic dicta!
        </p>
      </div>
      <div className="postTrainingMedia">
        <video src="/video.mp4" controls></video>
      </div>
      {/* <p className="totalPostComment" onClick={() => setIsOpen(true)}>
        425 comments
      </p>
      <div className="postComment">
        <button onClick={() => setIsOpen(true)}>
          <FaRegMessage />
          মতামত দিন
        </button>
      </div>
      <div className="postCommentBox">
        <CommentModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div> */}
    </div>
  );
};

export default SingleTraining;
