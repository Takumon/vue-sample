<script setup lang="ts">
import { useRouter } from 'vue-router'

// 不正なURLアクセス時にリダイレクト
const router = useRouter()
router.push('/users/new/input')
</script>
