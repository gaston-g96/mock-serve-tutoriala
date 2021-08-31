import { ResponseResolver, MockedRequest, restContext } from 'msw';
import { User } from '../../App';



const mockUser: ResponseResolver<MockedRequest, typeof restContext> = (req:any, res, ctx) => { 
    let userId =Number(req.params.userId)
    
const user: User = {
    id: userId,
    username: 'wakuwaku bank',
    age: 18,
  };

  return res(ctx.json(user));
};


export default mockUser;