/**
 *  Comment Interface
 */

import base from "./base"
import { getData} from "../utils/http";

const comment = {
    getCommentData(id){
        return getData(base.comment + "?id=" + id);
    }
}
export default comment;