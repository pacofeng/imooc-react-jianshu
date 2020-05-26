import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '一段婚姻最好的状态',
  content: '<img alt="content" src="https://upload-images.jianshu.io/upload_images/2100084-561f910aa2308e95?imageMogr2/auto-orient/strip|imageView2/2/w/626/format/webp" /> <p> 有人不想结婚，害怕婚后会变得不幸。 有人满怀憧憬走进婚姻，结果结婚还没多久，生活就只剩下了一地鸡毛，时常都怀疑自己选错了人，经常都想要赶紧离婚。 而对于很多结婚了好些年的人来说，虽然彼此还在一起，但是却一点都不像是夫妻，反而像是室友，像是仇敌，没有任何激情，有的只是相看两厌，懒得搭理，和互不理解。 也正是因为如此，所以越来越多的人，对婚姻感到失望，在婚姻中感到很累，从而谁也都不愿意再忍受谁，只是直接选择离婚。 诚然，或许婚姻从来都不如想象中那么好，但是更多时候，婚姻变得很糟，不是因为婚姻本身就是如此，只是身在此中的人，没有试着去好好经营。 </p> <p> 男人不容易，女人该多体谅和鼓励。 当一个男孩，在某一天结婚了，蜕变成为了男人，他不再只是自己，而是一个丈夫，一个父亲，还是一个父母需要依靠的儿子。 在他的肩上，有着整个家庭的重任，虽说男儿有泪不轻弹，男人就该坚韧，但是他的内心终究也还是有着脆弱的一面，会想要有个地方，可以让他停歇，带给他一份温暖。 每当这样的时候，如果女人不但看不到男人的期待，一点都不理解男人，还总是打击男人，指责男人，对男人冷言冷语，男人难免就会寒了心。 这个世界上，非凡的终究只是少数人，大多数的男人，不过都只是平凡人，所以对于身边的男人，女人不妨多体谅一些，也多给予他一些鼓励。 他的确不如很多人，然而却是他在保护着你，在支撑着你们的家庭。 </p>'
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_DETAILS: 
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state;
  }
};

