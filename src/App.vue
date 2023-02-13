<template>
	<div id="webtoonWrap">
		<Webtoon v-bind:propsItems="webtoonsList"/>
	</div>
</template>

<script>
// import Header from './components/Header';
// import Menu from './components/Menu';
// import Content from '@/components/Content';
// import Box from './components/Box';
import Webtoon from './components/Webtoon';

export default {
	name: 'wrapper',
	components: {
		// Header,
		// Menu,
		// Content,
		// Box,
		Webtoon
	},
	data() {
		return {
			webtoonsList: [
				{
					name: '햄스터와 그녀',
					link: 'http://webtoon.daum.net/webtoon/view/hamsterandher',
					img: 'http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54'
				},
				{
					name: '프롬 스타',
					link: 'http://webtoon.daum.net/webtoon/view/fromstar',
					img: 'http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1'
				},
				{
					name: '위대한 로맨스',
					link: 'http://webtoon.daum.net/webtoon/view/greatromance',
					img: 'http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085'
				},
				{
					name: '빛나는 손을',
					link: 'http://webtoon.daum.net/webtoon/view/Hand',
					img: 'http://t1.daumcdn.net/cartoon/5913FCAC0234C50001'
				}
			]
		}
	}
}
</script>

<style scoped>
</style>