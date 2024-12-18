<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

// users/:id?/editアクセス時に小ページにリダイレクト
const route = useRoute('/users/[id]/edit/')
const router = useRouter()
router.push(`/users/${route.params.id}/edit/input`)
</script>
