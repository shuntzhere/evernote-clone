import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebarItem/sidebarItem';

class SideBarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null
        };
    }

    render() {

        const { notes, classes, selectedNoteIndex } = this.props;

        if (notes) {
            return (
                <div className={classes.SideBarComponent}>
                    <Button
                        onClick={this.newNoteBtnClick}
                        className={classes.newNoteBtn}>{this.state.addingNote ? ' Cancel' : 'New Note'}</Button>
                    {
                        this.state.addingNote ?
                            <div>
                                <input type='text'
                                    className={classes.newNoteInput}
                                    placeholder='Enter note title'
                                    onKeyUp={(e) => this.updateTitle(e.target.value)}>
                                </input>
                                <Button
                                    className={classes.newNoteSubmitBtn}
                                    onClick={this.newNote}>Submit
                                </Button>
                            </div> :
                            null
                    }
                    <List>
                        {
                            notes.map((note, index) => {
                                return (
                                    <div key={index}>
                                        <SidebarItemComponent
                                            note={note}
                                            index={index}
                                            selectedNoteIndex={selectedNoteIndex}
                                            selectNote={this.selectNote}
                                            deleteNote={this.deleteNote}>
                                        </SidebarItemComponent>
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </List>
                </div>
            );
        } else {
            return (<div>Add a note!</div>)
        }
    }

    newNoteBtnClick = () => {
        this.setState({ title: null, addingNote: !this.state.addingNote });
    }
    updateTitle = (txt) => {
        this.setState({ title: txt })
    }
    newNote = () => {
        this.props.newNote(this.state.title);
        this.setState({ title: null, addingNote: false });
    }
    selectNote = (n, i) => this.props.selectNote(n, i);

    deleteNote = (note) => this.props.deleteNote(note);
}

export default withStyles(styles)(SideBarComponent);