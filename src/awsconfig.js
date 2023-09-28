import { Amplify} from 'aws-amplify';
import config from './aws-exports';

const aws = Amplify.configure(config);


export default aws;

