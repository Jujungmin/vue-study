<template>
    <section class="main">
        <ul class="todo-list">
            <li
                v-bind:class="{todo: true, completed: isDone, editing: edit.id === id}"
                v-for="({id, text, isDone}) in propsTodos"
                v-bind:key="id">
                <div class="view">
                    <input class="toggle" type="checkbox" v-bind:checked="isDone" @click="handleDone(id)"/>
                    <label @dblclick="handleEdit({text,id})">{{ text }}</label>
                    <button class="destroy" @click="handleRemove(id)"></button>
                </div>
                <input class="edit" type="text" v-model="edit.text" @keypress="handleUpdate"/>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: {
        propsTodos: { type: Array, default: () => [] }
    },
    data() {
        return {
            edit: {
                text: '',
                id: -1
            }
        }
    },
    methods: {
        // 삭제버튼 시 리스트삭제
        handleRemove(id) {
            this.$emit('removeTodo', id);
        },
        // 체크 클릭 시 텍스트 취소선 생성
        handleDone(id) {
            this.$emit('updateDone', id);
        },
        // 더블클릭 시 리스트 수정
        handleEdit({text, id}) {
            console.log(text, id)
            this.edit = {
                text,
                id
            };
        },
        // 리스트수정 후 등록
        handleUpdate({keyCode}) {
            if(keyCode === 13) {
                this.$emit('updateTodo', this.edit);
                this.edit = { // 추가된 후 edit state를 리셋.
                    text: '',
                    id: -1
                }
            }
        }
    }
}
</script>

<style>
.main {position:relative; z-index:2; border-top:1px solid #e6e6e6;}
.toggle-all {width:1px; height:1px; border:none; opacity:0; position:absolute; right:100%; bottom:100%;}
.toggle-all + label {width:60px; height:34px; font-size:0; position:absolute; top:-52px; left:-13px; transform:rotate(90deg);}
.toggle-all + label::before {content:'>'; font-size:22px; color:#e6e6e6; padding:10px 27px;}
.toggle-all:checked + label::before {color:#737373;}
.todo-list {margin:0; padding:0; list-style:none;}
.todo-list li {position:relative; font-size:24px; border-bottom:1px solid #ededed;}
.todo-list li:last-child {border-bottom:none;}
.todo-list li.editing {border-bottom:none; padding:0;}
.todo-list li.editing .edit {display:block; width:calc(100% - 43px); padding:12px 16px; margin:0 0 0 43px;}
.todo-list li.editing .view {display:none;}
.todo-list li .toggle {text-align:center; width:40px; height:auto; position:absolute; top:0; bottom:0; margin:auto 0; border:none; -webkit-apperance:none; appearance:none;}
.todo-list li .toggle {opacity:0;}
.todo-list li .toggle + label {background-image:url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:center left;}
.todo-list li .toggle:checked + label {background-image:url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");}
.todo-list li label {word-break:break-all; padding:15px 15px 15px 60px; display:block; line-height:1.2; transition:color .4s;}
.todo-list li.completed label {color:#d9d9d9; text-decoration:line-through;}
.todo-list li .destroy {display:none; position:absolute; top:0; right:10px; bottom:0; width:40px; height:40px; margin:auto 0; font-size:30px; color:#cc9a9a; margin-bottom:11px; transition:color .2s ease-out;}
.todo-list li .destroy:after {content:'×'; cursor:pointer;}
.todo-list li:hover .destroy {display:block;}
.todo-list li .edit {display: none;}
.todo-list li.editing:last-child {margin-bottom: -1px;}


</style>