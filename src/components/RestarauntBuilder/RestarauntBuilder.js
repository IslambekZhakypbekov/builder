import classes from "./RestarauntBuilder.module.css";
import RestarauntControls from "./RestarauntControls/RestarauntControls";
import RestarauntPreview from "./RestarauntPreview/RestarauntPreview";

const RestarauntBuilder = () => {
   return(
       <div className={classes.RestarauntBuilder}>
           <RestarauntPreview/>
           <RestarauntControls/>
       </div>
   )
}
 
export default RestarauntBuilder;