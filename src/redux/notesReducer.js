import * as actions from './actionsTypes';

const initialState = {
    notes: [
        {
            Date:'13.06.2022',
            Pulse:96,
            Temperature:36.6,
            SleepTime:12,
            Exercises:14
        },
        {
            Date:'14.06.2022',
            Pulse:88,
            Temperature:38.6,
            SleepTime:7,
            Exercises:8
        },
        {
            Date:'15.06.2022',
            Pulse:120,
            Temperature:39.6,
            SleepTime:9,
            Exercises:18
        },
        {
            Date:'16.06.2022',
            Pulse:77,
            Temperature:36.7,
            SleepTime:10,
            Exercises:9
        }
    ]
}

export function notesReducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_NOTES_CARD: {
            state.notes.push(action.notes);
            return state;
        }
        default:return state
    }
}

export function addNotesCard(notes) {
    return ({
        type: actions.ADD_NOTES_CARD,
        notes: notes,
    })
}