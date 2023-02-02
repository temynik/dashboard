<template>
    <section class="section">
        <div class="columns column box mb-5"> <div class="control">
            <b-taglist attached>
                <b-tag type="is-dark" size="is-medium">4 уровень</b-tag>
                <b-tag type="is-primary" size="is-medium">artem-phys</b-tag>
                <b-tag type="is-primary is-light" size="is-medium">Время на сайте: 744ч.</b-tag>
            </b-taglist>
        </div></div>
        <div class="columns box">
            <div class="column">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img src="@/assets/media/avatar.jpg" alt="avatar">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <ul class="mt-0">
                                <li><span>Имя: </span>Artem</li>
                                <li><span>Фамилия: </span>Unknown</li>
                                <li><span>Класс: </span>11</li>
                            </ul>
                        </div>
                        <b-button type="is-primary is-small ml-4">Редактировать профиль</b-button>
                    </div>
                </article>
            </div>
            <div class="column">
                <div class="content">
                    <ul>
                        <li><span>Зарегистрирован: </span>23 Apr 2022</li>
                        <li><span>Последняя активность: </span>10 Jan 2023</li>
                        <li><span>Медиа: </span>
                            <a aria-label="github" href="https://github.com/" target="_blank">
                                <span class="icon is-small">
                                    <i class=" fab fa-github" aria-hidden="true"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="column">
                <div class="content">
                    <ul>
                        <li><span>Подписки: </span>0</li>
                        <li><span>Подписчики: </span>0</li>
                        <li><span>Комментарий: </span>3</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
		name: 'UserData',
		props: {}
    }
</script>