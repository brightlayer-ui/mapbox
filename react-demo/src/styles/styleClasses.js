/*
  This file contains class definitions for use with Material UI's 'withStyles' 
  method that allows for custom style overrides of the default component visuals.
*/


const styles = theme => ({
  
  fab: {
    bottom: 60,
    right: 20,
    width: '190px',
    position: 'fixed',
    height: '50px',
    borderRadius: 2,
    zIndex: 2000,

  },
  themeChip: {
    bottom: 24,
    right: 20,
    position: 'fixed',
    width: '190px',
    zIndex: 2000,
    borderRadius: 2
  },
  card: {
    width: 150,
    position: "absolute",
    top: 20,
    left: 20,
  }
});
export default styles;