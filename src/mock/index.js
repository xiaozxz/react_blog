import Mock from 'mockjs'
import artcle from './artcle'

Mock.mock(/api\/getarticle/, 'get',function() {
    return (artcle.getArtcle())
})