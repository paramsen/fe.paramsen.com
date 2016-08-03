import {takeEvery} from 'redux-saga';
import {put, call, fork} from 'redux-saga/effects';
import * as actions from '../action/articleAction';
import * as api from '../api/article';
import {GET_ARTICLES, GET_ARTICLE_DETAIL} from '../const';

export function *getArticles(action) {
    const articles = yield call(api.getArticles, action.index, action.count);
    yield put(actions.getArticlesSuccess(articles));
}

export function *watchGetArticles() {
    yield call(takeEvery, GET_ARTICLES, getArticles);
}

export default function *saga() {
    yield [
        fork(watchGetArticles)
    ];
}