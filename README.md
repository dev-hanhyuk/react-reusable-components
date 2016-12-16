# Reusable components for React development
This repository is a small collection of reusable components for React web development.
<br />

## Contents
* social media svg-icons

<br />


## social media svg-icons

1. Copy necessary svg-icon files to your working on component directory.

2. Import svg-icon component from directory
```JSX
import ComponentName from `/icon_folder_name/icon_file_name`; 

ex)import Facebook from '../common/svg-icons/Facebook'
```

3. Use icon component in JSX render
You can also pass down "style" props to the svg icons.

```JSX
render () {
  return (
    <a><Facebook style={styles.socialMedia}/></a>
  )
}

const styles = {
  socialMedia: {
    fill: '#fff'
  }
}
```

