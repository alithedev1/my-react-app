import { createBoard } from '@wixc3/react-board';
import Reviews from '../../../components/Home/Reviews';

export default createBoard({
    name: 'Reviews',
    Board: () => <Reviews />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasBackgroundColor: '#ffffff'
    }
});
