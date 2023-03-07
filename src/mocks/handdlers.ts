import {rest} from 'msw'

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(ctx.status(200),ctx.json([
            {id: 1, name: 'name1'},
            {id: 2, name: 'name2'}
        ]))
    })]