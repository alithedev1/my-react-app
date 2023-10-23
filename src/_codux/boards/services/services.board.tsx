import { createBoard } from '@wixc3/react-board';
import Services from '../../../components/Home/Services';

export default createBoard({
    name: 'Services',
    Board: () => <Services />,
    isSnippet: true,
});
