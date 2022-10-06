const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <button className={`button ${className}`}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div class="main-container">
    <h1 class="heading">Social Buttons</h1>

    <div class="buttons">
      <Button className="like-button" name="Like" />
      <Button className="comment-button" name="Comment" />
      <Button className="share-button" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
