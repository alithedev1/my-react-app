import { createBoard } from '@wixc3/react-board';
import Header from '../../../components/Header/Header';

export default createBoard({
    name: 'Header',
    Board: () => null,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 423,
    }
});
