<template>
	<!-- <div id="webtoonWrap">
		<Webtoon v-bind:propsItems="webtoonsList"/>
	</div> -->
	<Child1 v-bind:propsItem="menuList"/>
	<section>
		<ul>
			<Child2 v-for="(item) in productList" :key="item.id" v-bind:propProduct="item" />
		</ul>
	</section>
</template>

<script>

// import Header from './components/Header';
// import Menu from './components/Menu';
// import Content from '@/components/Content';
// import Box from './components/Box';
// import Webtoon from './components/Webtoon';

import Child1 from './components/Child1';
import Child2 from './components/Child2';

export default {
	name: 'wrapper',
	components: {
		// Header,
		// Menu,
		// Content,
		// Box,
		// Webtoon

		Child1,
		Child2,
	},
	// data() {
	// 	return {
	// 		webtoonsList: [
	// 			{
	// 				name: '햄스터와 그녀',
	// 				link: 'http://webtoon.daum.net/webtoon/view/hamsterandher',
	// 				img: 'http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54'
	// 			},
	// 			{
	// 				name: '프롬 스타',
	// 				link: 'http://webtoon.daum.net/webtoon/view/fromstar',
	// 				img: 'http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1'
	// 			},
	// 			{
	// 				name: '위대한 로맨스',
	// 				link: 'http://webtoon.daum.net/webtoon/view/greatromance',
	// 				img: 'http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085'
	// 			},
	// 			{
	// 				name: '빛나는 손을',
	// 				link: 'http://webtoon.daum.net/webtoon/view/Hand',
	// 				img: 'http://t1.daumcdn.net/cartoon/5913FCAC0234C50001'
	// 			}
	// 		]
	// 	}
	// }
	data() {
		return {
			// menu: ['HOME', 'ABOUT', 'PRODUCTS', 'ETC'],
			menuList: [
				{
					id: '01',
					title: 'HOME'
				},
				{
					id: '02',
					title: 'ABOUT'
				},
				{
					id: '03',
					title: 'PRODUCTS'
				},
				{
					id: '04',
					title: 'ETC'
				},
			],
			productList: [
				{
					id: 'ID-0',
					title: 'Sample Product1',
					price: 10000,
					img: 'https://dummyimage.com/200/F6A9A9/464660'
				},
				{
					id: 'ID-1',
					title: 'Sample Product2',
					price: 20000,
					img: 'https://dummyimage.com/200/FFBF86/464660'
				},
				{
					id: 'ID-2',
					title: 'Sample Product3',
					price: 30000,
					img: 'https://dummyimage.com/200/FFF47D/464660'
				},
				{
					id: 'ID-3',
					title: 'Sample Product3',
					price: 40000,
					img: 'https://dummyimage.com/200/C2F784/464660'
				}
			]
		}
	}
}
</script>

<style scoped>
</style>