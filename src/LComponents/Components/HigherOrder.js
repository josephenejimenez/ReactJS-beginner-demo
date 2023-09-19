import React from "react";

const UpdateComp = OriginalComp => {
    class NewComp extends React.Component {
        render() {
            return <OriginalComp name="The user" age="10"/>;
        }
    }
    return NewComp;
}

export default UpdateComp;