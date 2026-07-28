import { Participant } from '../participant.model';
import * as ParticipantsActions from './participants.actions';

export interface State {
  participants: Participant[];
  participant: Participant;
  participantIdx: number
}

const initialState: State = {
    participants: [],
    participant: null,
    participantIdx: null
};

export function participantsReducer(
  state = initialState,
  action: ParticipantsActions.ParticipantsActions
) {
  switch (action.type) {
    case ParticipantsActions.SET_PARTICIPANTS:
      return {
        ...state,
        participants: [...action.payload]
      };
    case ParticipantsActions.ADD_PARTICIPANT:
      return {
        ...state,
        participants: [...state.participants, action.payload],
        participant: action.payload
      };
    case ParticipantsActions.UPDATE_PARTICIPANT:
      const updatedParticipant = {
        ...state.participants[action.payload.index],
        ...action.payload.newParticipant
      };
      const updatedParticipants = [...state.participants];
      updatedParticipants[action.payload.index] = updatedParticipant;
      return {
        ...state,
        participants: updatedParticipants,
        participant: action.payload.newParticipant
      };
    case ParticipantsActions.DELETE_PARTICIPANT:
      return {
        ...state,
        participants: state.participants.filter((recipe, index) => {
          return index !== action.payload;
        }),
        participantIdx: action.payload
      };
    default:
      return state;
  }
}
