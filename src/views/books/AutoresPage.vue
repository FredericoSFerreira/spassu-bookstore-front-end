<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body class="card">
        <div class="card-header d-flex justify-content-between flex-wrap">
          <div class="col-6">
            <b-form-input v-model="search" type="text" placeholder="Faça uma pesquisa..." debounce="600"
                          @update:model-value="getAuthors(1, search)"></b-form-input>
          </div>
          <div class="d-flex gap-3">
            <a href="#" class="text-center btn btn-primary d-flex gap-2" @click="clearData()" data-bs-toggle="modal"
               data-bs-target="#new-permission">
              <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Novo Autor
            </a>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <b-table id="my-table" :items="authors" :fields="columns" hover responsive="sm" show-empty
                     :sticky-header=true small>
              <template #cell(created_at)="row">
                {{ formatDate(row.item.created_at) }}
              </template>

              <template #cell(updated_at)="row">
                {{ formatDate(row.item.updated_at) }}
              </template>

              <template #cell(actions)="row">
                <b-button-group size="sm">
                  <b-button variant="primary" @click="editAuthor(row.item)" data-bs-toggle="modal"
                            data-bs-target="#new-permission">Editar
                  </b-button>
                  <b-button variant="danger" @click="removeAuthor(row.item)">Excluir</b-button>
                </b-button-group>
              </template>
            </b-table>
            <b-pagination
              aria-controls="my-table"
              align="end"
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              @update:model-value="getAuthors"
            ></b-pagination>
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
  <!-- New author modal -->
  <div class="modal fade" id="new-permission" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="staticBackdropPermissionLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropPermissionLabel">Adicionar/Editar</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Nome do Autor</label>
            <input type="text" v-model="author.name" class="form-control" placeholder="Ex: Machado de Assis" />
          </div>
          <div class="text-end">
            <button type="button" class="btn btn-primary me-2" @click="saveAuthor()" :data-bs-dismiss="false">Salvar
            </button>
            <button type="button" class="btn btn-danger" @click="clearData()" data-bs-dismiss="modal" id="close">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'

export default {
  name: 'admin-view',
  data() {
    return {
      modal: false,
      search: '',
      total: 0,
      perPage: 10,
      currentPage: 1,
      isEdit: false,
      author: {
        id: '',
        name: ''
      },
      columns: [
        { key: 'id', label: 'ID' },
        { key: 'nome', label: 'Nome', sortable: false },
        { key: 'created_at', label: 'Data Cadastro' },
        { key: 'updated_at', label: 'Data Atualização' },
        { key: 'actions' }
      ],
      authors: []
    }
  },
  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString)
      return date.format('DD/MM/YYYY HH:MM:ss')
    },
    addAuthor() {
      this.$router.push({ path: '/books/novo-autor' })
    },
    clearData() {
      this.author.name = ''
      this.author.id = ''
      this.isEdit = false
    },
    saveAuthor() {
      let url = `/autores`
      let method = 'post'
      if (this.isEdit) {
        url = `/autores/${this.author.id}`
        method = 'put'
      }

      this.$axios({ method: method, url: url, data: { 'nome': this.author.name } })
        // .post(`/autores`, { 'nome': this.author.name })
        .then(response => {
          console.log(this.isEdit, response)
          const text = `Autor ${this.isEdit ? 'alterado': 'cadastrado'}  com sucesso.`
          document.getElementById('close').click();
          this.author.name = ''
          this.$swal.fire({
            title: 'Sucesso',
            text: text,
            icon: 'success'
          }).then((result) => {
            if (result.isConfirmed) {
              this.author.name = ''
              this.author.id = ''
              this.isEdit = false
              this.getAuthors()
            }
          })
        })
        .catch(error => {
          this.author.name = ''
          this.author.id = ''
          this.isEdit = false
          this.$swal.fire({
            title: ``,
            text: `${error.response.data.error_message}`,
            icon: 'warning'
          })
        })
    },
    removeAuthor(item) {
      console.log(item)
      this.$swal.fire({
        icon: 'question',
        title: `Tem certeza que deseja excluir o autor ${item.nome} ?`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Sim',
        denyButtonText: `Não`
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios
            .delete(`/autores/${item.id}`)
            .then(response => {
              console.log(response)
              this.$swal.fire({
                title: 'Sucesso',
                text: 'Autor removido com sucesso.',
                icon: 'success'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.getAuthors()
                }
              })
            })
            .catch(error => {
              console.error(error)
            })

        }
      })
    },
    editAuthor(item) {
      this.author.name = item.nome
      this.author.id = item.id
      this.isEdit = true
    },
    getAuthors(page = 1, search = '') {
      console.log(page, 'HERER')
      this.$axios
        .get(`/autores?page=${page}&search=${search}`)
        .then(response => {
          this.authors = response.data.data
          this.total = response.data.total
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  mounted() {
    this.getAuthors()
  },
  computed: {
    rows() {
      return this.total
    }
  }
}
</script>
