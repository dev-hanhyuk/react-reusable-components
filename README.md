# Reusable components for React development
This repository is a small collection of reusable components for React web development.
<br />

## Contents
* social media svg-icons

<br />


## social media svg-icons

1. copy necessary svg-icon files to your working on component directory.

2. import svg-icon component from directory
```JSX
import ComponentName from `icon_file_name`; ex)import Facebook from 'Facebook'
```

3. use icon component in JSX render
You can also send "style" prop to change properties of svg icons.

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

