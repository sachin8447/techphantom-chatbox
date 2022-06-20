const mongo = require('mongoose')


const User = mongo.Schema({
    firstName:{
        type:String,
        required:[true,'Provide First Name'],
        trim:true,
        maxlength:[20,'Name Size is Greater Than 20 Chars']
    },
    middleName:{
        type:String,
        required:[false,'Provide Middle Name'],
        trim:true,
        maxlength:[20,'Name Size is Greater Than 20 Chars']
    },
    lastName:{
        type:String,
        required:[false,'Provide Last Name'],
        trim:true,
        maxlength:[20,'Name Size is Greater Than 20 Chars']
    },
    gender:{
        type:String,
        required:[true,'Provide Gender '],
        trim:true,
        maxlength:[20,'Name Size is Greater Than 20 Chars']
    },
    photoPath:{
        type:Buffer,
        default:'iVBORw0KGgoAAAANSUhEUgAAAEoAAABMCAMAAAD9V9FeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NThBMEUxOEJEOEQxMTFFQzg0MUJBNjVCODE3NUNBMDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NThBMEUxOENEOEQxMTFFQzg0MUJBNjVCODE3NUNBMDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OEEwRTE4OUQ4RDExMUVDODQxQkE2NUI4MTc1Q0EwOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1OEEwRTE4QUQ4RDExMUVDODQxQkE2NUI4MTc1Q0EwOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjLOwYMAAAMAUExURfjVOGq1j4N5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'
    }
    
})


module.exports = mongo.model('user',User);