<script setup lang="ts">
import { useRouter } from 'vue-router'

// usersアクセス時に小ページにリダイレクト
const router = useRouter()
router.push(`/users/list`)
</script>
