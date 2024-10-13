<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body class="card">
        <div class="card-header d-flex justify-content-between flex-wrap">
          <div class="col-6">
            <b-form-input v-model="search" type="text" placeholder="Faça uma pesquisa..." debounce="600"
                          @update:model-value="getBooks(1, search)"></b-form-input>
          </div>
          <div class="col-2">
          </div>

          <div class="d-flex gap-1">
            <a href="#" class="text-center btn btn-primary d-flex gap-2" @click="getReport()">
              <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7379 2.76175H8.08493C6.00493 2.75375 4.29993 4.41175 4.25093 6.49075V17.2037C4.20493 19.3167 5.87993 21.0677 7.99293 21.1147C8.02393 21.1147 8.05393 21.1157 8.08493 21.1147H16.0739C18.1679 21.0297 19.8179 19.2997 19.8029 17.2037V8.03775L14.7379 2.76175Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>                                    <path d="M14.4751 2.75V5.659C14.4751 7.079 15.6231 8.23 17.0431 8.234H19.7981" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>                                    <path d="M14.2882 15.3584H8.88818" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>                                    <path d="M12.2432 11.606H8.88721" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>                                </svg>
              </svg>
              Dowload Relatório
            </a>
          </div>

          <div class="d-flex gap-3">
            <a href="#" class="text-center btn btn-primary d-flex gap-2" data-bs-toggle="modal"
               data-bs-target="#new-permission" @click="clearData()">
              <svg width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Novo Livro
            </a>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <b-table id="my-table" :items="books" :fields="columns" hover responsive="sm" show-empty
                     :sticky-header=true small>
              <template #cell(created_at)="row">
                {{ formatDate(row.item.created_at) }}
              </template>

              <template #cell(updated_at)="row">
                {{ formatDate(row.item.updated_at) }}
              </template>

              <template #cell(valor)="row">
                R${{ row.item.valor }}
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
              @update:model-value="getBooks"
            ></b-pagination>
          </div>
        </div>
      </b-card>
    </b-col>
  </b-row>
  <!-- New book modal -->
  <div class="modal fade" id="new-permission" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="staticBackdropPermissionLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropPermissionLabel">Adicionar/Editar livros</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12 form-group">
              <label class="form-label">Titulo</label>
              <input type="text" v-model="book.titulo" class="form-control" placeholder="Ex: Romeu e Julieta" />
            </div>

            <div class="col-6 form-group">
              <label class="form-label">Editora</label>
              <input type="text" v-model="book.editora" class="form-control" placeholder="Ex: Pearson" />
            </div>

            <div class="col-6 form-group">
              <label class="form-label">Ano de Publicação</label>
              <input type="text" v-model="book.ano_publicacao" class="form-control" placeholder="Ex: 2010" />
            </div>

            <div class="col-6 form-group">
              <label class="form-label">Edição</label>
              <input type="text" v-model="book.edicao" class="form-control" placeholder="Ex: 2" />
            </div>
            <div class="col-6 form-group">
              <label class="form-label">Valor</label>
              <money3 v-model="book.valor" v-bind="moneyConfig" class="form-control"></money3>
            </div>

            <div class="col-12">
              <label class="form-label">Selecione os Autores</label>
              <multiselect v-model="book.autores" modelValue="id"
                           selectLabel="Precione enter para selecionar" deselectLabel="Precione enter para remover"
                           placeholder="Pesquise e selcione um ou mais autores" label="nome"
                           track-by="id" :options="autores" :multiple="true" :taggable="true"></multiselect>
            </div>

            <div class="col-12 form-group">
              <label class="form-label">Selecione os Assuntos/Categorias</label>
              <multiselect v-model="book.assuntos" modelValue="id"
                           selectLabel="Precione enter para selecionar" deselectLabel="Precione enter para remover"
                           placeholder="Pesquise e selecione uma ou mais categorias" label="descricao"
                           track-by="id" :options="assuntos" :multiple="true" :taggable="true"></multiselect>
            </div>
          </div>
          <div class="text-end">
            <button type="button" class="btn btn-primary me-2" @click="saveAuthor()" :data-bs-dismiss="false">Salvar
            </button>
            <button type="button" class="btn btn-danger" @click="clearData()" data-bs-dismiss="modal" id="close">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { Money3Component } from 'v-money3'
import Multiselect from 'vue-multiselect'

export default {
  name: 'livro-view',
  components: { money3: Money3Component, Multiselect },
  data() {
    return {
      options: [
        { id: 'Vue.js', nome: 'JavaScript' },
        { id: 'Rails', nome: 'Ruby' },
        { id: 'Sinatra', nome: 'Ruby' },
        { id: 'Laravel', nome: 'PHP' },
        { id: 'Phoenix', nome: 'Elixir' }
      ],
      moneyConfig: {
        decimal: '.',
        thousands: '',
        prefix: 'R$ ',
        suffix: ' ',
        precision: 2,
        masked: false /* doesn't work with directive */
      },
      modal: false,
      search: '',
      total: 0,
      perPage: 10,
      currentPage: 1,
      isEdit: false,
      book: {
        id: '',
        titulo: '',
        editora: '',
        edicao: '',
        ano_publicacao: '',
        valor: '',
        autores: [],
        assuntos: []
      },
      autores: [],
      assuntos: [],
      columns: [
        { key: 'id', label: 'ID' },
        { key: 'titulo', label: 'Titulo', sortable: false },
        { key: 'editora', label: 'Editora', sortable: false },
        { key: 'edicao', label: 'Edição', sortable: false },
        { key: 'ano_publicacao', label: 'Ano publicação', sortable: false },
        { key: 'valor', label: 'Valor', sortable: false },
        { key: 'created_at', label: 'Data Cadastro' },
        // { key: 'updated_at', label: 'Data Atualização' },
        { key: 'actions' }
      ],
      books: []
    }
  },
  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString)
      return date.format('DD/MM/YYYY HH:MM:ss')
    },
    clearData() {
      this.book.titulo = ''
      this.book.id = ''
      this.book.editora = ''
      this.book.edicao = ''
      this.book.ano_publicacao = ''
      this.book.valor = ''
      this.book.assuntos = []
      this.book.autores = []
      this.isEdit = false
    },
    saveAuthor() {
      let url = `/livros`
      let method = 'post'
      if (this.isEdit) {
        url = `/livros/${this.book.id}`
        method = 'put'
      }

      const payload = {
        'titulo': this.book.titulo,
        'editora': this.book.editora,
        'edicao': this.book.edicao,
        'ano_publicacao': this.book.ano_publicacao,
        'valor': this.book.valor,
        'autores': this.book.autores.map(({ id }) => id),
        'assuntos': this.book.assuntos.map(({ id }) => id)
      }

      this.$axios({ method: method, url: url, data: payload })
        // .post(`/livros`, { 'nome': this.book.titulo })
        .then(response => {
          console.log(response, this.isEdit)
          const text = `Livro ${this.isEdit ? 'alterado' : 'cadastrado'} com sucesso.`
          document.getElementById('close').click()
          this.$swal.fire({
            title: 'Sucesso',
            text: text,
            icon: 'success'
          }).then((result) => {
            if (result.isConfirmed) {
              this.clearData()
              this.getBooks()
            }
          })
        })
        .catch(error => {
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
        title: `Tem certeza que deseja excluir este livro ${item.titulo} ?`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Sim',
        denyButtonText: `Não`
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios
            .delete(`/livros/${item.id}`)
            .then(response => {
              console.log(response)
              this.$swal.fire({
                title: 'Sucesso',
                text: 'Livro removido com sucesso.',
                icon: 'success'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.getBooks()
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
      this.book = { ...item }
      this.isEdit = true
    },
    getBooks(page = 1, search = '') {
      console.log(page, 'HERER')
      this.$axios
        .get(`/livros?page=${page}&search=${search}`)
        .then(response => {
          this.books = response.data.data
          this.total = response.data.total
        })
        .catch(error => {
          console.error(error)
        })
    },
    getReport() {
      this.$axios
        .get(`/relatorio`, { responseType: 'blob' })
        .then(response => {
          console.error(response)
          // Cria um URL para o blob recebido
          const fileURL = window.URL.createObjectURL(new Blob([response.data]))
          // Cria um link para download
          const fileLink = document.createElement('a')
          fileLink.href = fileURL
          fileLink.setAttribute('download', 'relatorio.pdf') // Nome do arquivo para download
          document.body.appendChild(fileLink)

          fileLink.click() // Simula um clique no link para iniciar o download

          fileLink.remove() // Remove o link do DOM
          window.URL.revokeObjectURL(fileURL)
        })
        .catch(error => {
          console.error(error)
        })
    },
    fetchAuthorsAndMatters() {
      Promise.all([
        this.$axios.get('/autores?paginate=1000'),
        this.$axios.get('/assuntos?paginate=1000')
      ])
        .then(([respostaAutores, respostaAssuntos]) => {
          this.autores = respostaAutores.data.data.map(autor => ({
            id: autor.id,
            nome: autor.nome
          }))
          this.assuntos = respostaAssuntos.data.data.map(
            assunto => ({ id: assunto.id, descricao: assunto.descricao })
          )
        })
        .catch(error => {
          console.error('Erro ao buscar autores e assuntos:', error)
        })
    }
  },
  mounted() {
    this.getBooks()
    this.fetchAuthorsAndMatters()
  },
  computed: {
    rows() {
      return this.total
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.multiselect__tag {
  background: #3a57e8 !important;
}

.multiselect__option--highlight {
  background: #3a57e8 !important;
}

. multiselect__option {
  background: #3a57e8 !important;
}
</style>
