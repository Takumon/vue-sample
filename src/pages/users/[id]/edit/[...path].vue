<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

// 不正なURLアクセス時にリダイレクト
const router = useRouter()
const route = useRoute('/users/[id]/edit')
router.push(`/users/${route.params.id}/edit/input`)
</script>
