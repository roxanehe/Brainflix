import "./Videoview.scss";
function Videoview(props) {
  const { image } = props.currentvideo;
  return <video controls width="100%" height="100%" poster={image} />;
}
export default Videoview;
