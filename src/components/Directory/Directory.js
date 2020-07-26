import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/DirectorySelectors";
import { createStructuredSelector } from "reselect";
import { DirectoryMenuComponent } from "./DirectoryStyles";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuComponent>
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </DirectoryMenuComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
