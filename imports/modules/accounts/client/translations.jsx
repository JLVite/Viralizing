export default {
  en: {
    edit: {
      tabs: {
        concept: {
          title: 'Concept',
          instructions: 'Fill in the following fields.',
          form: {
            description: 'Description fo the person/character/concept',
            occupation: 'Occupation',
            profession: 'Profession',
            subjects: {
              primary: 'Primary Subjects',
              secondary: 'Secondary Subjects',
              forbidden: 'Forbidden Subjects'
            },
            keywords: 'Keywords',
            likes: 'Hobbies & Likes',
            motivations: 'Motivations'
          }
        },
        gallery: {
          title: 'Gallery',
          images: {
            title: 'Images',
            newAlbum: {
              title: 'Enter your Album Name',
              confirm: 'Add Album',
              cancel: 'Cancel'
            },
            empty: {
              message: 'You have no pictures yet.',
              button: 'Upload Picture'
            },
            list: {
              newImage: 'Add Picture',
              newAlbum: 'Add Album'
            },
            delete: {
              albumHelper: 'Delete Album',
              title: 'Are you sure?',
              description: 'You won\'t be able to revert this!',
              confirm: 'Yes, delete it.',
              cancel: 'Cancel'
            }
          },
          videos: {
            title: 'Videos',
            newAlbum: {
              title: 'Enter your Album Name',
              confirm: 'Add Album',
              cancel: 'Cancel'
            },
            new: {
              title: 'Enter your video URL',
              confirm: 'Add Video',
              cancel: 'Cancel'
            },
            list: {
              newVideo: 'Add Video',
              newAlbum: 'Add Album'
            },
            empty: {
              message: 'You have no videos yet.',
              button: 'New Video'
            },
            delete: {
              albumHelper: 'Delete Album',
              title: 'Are you sure?',
              description: 'You won\'t be able to revert this!',
              confirm: 'Yes, delete it.',
              cancel: 'Cancel'
            }
          }
        },
        information: {
          title: 'Information',
          instructions: 'Enter your personal information in the following fields.',
          form: {
            name: 'Name',
            surname: 'Last Name',
            save: 'Save',
            gender: {
              label: 'Gender',
              values: {
                male: 'Male',
                female: 'Female'
              }
            },
            birthDate: 'Birth Date',
            maritalStatus: {
              label: 'Marital Status',
              values: {
                single: 'Single',
                married: 'Married'
              }
            },
            forbiddenSubjects: 'Forbidden Subjects',
            country: 'Country',
            city: 'City',
            languages: 'Languages',
            sexualOrientation: {
              label: 'Sexual Orientation',
              values: {
                heterosexual: 'Heterosexual',
                homosexual: 'Homosxual',
                bisexual: 'Bisexual',
                transexual: 'Transexual'
              }
            },
            likes: 'Likes',
            categories: 'Categories',
            specialties: 'Specialties',
            description: {
              label: 'Description',
              description: 'Add a description of your person, character or brand.'
            },
            urlTitle: 'Enter your websites.',
            url: 'URLs',
            proposal: {
              categories: {
                label: 'Propose categories',
                placeholder: 'Propose your category'
              },
              specialties: {
                label: 'Propose specialties',
                categories: 'Select a category',
                placeholder: 'Propose your specialty'
              },
              modals: {
                error: {
                  title: 'Error',
                  description: 'There was an error in your request. Please contact customer support.'
                },
                done: {
                  title: 'Done!',
                  description: 'Thanks for your proposal'
                }
              }
            }
          },
          helpers: {
            noSelect: 'Not Selected'
          }
        },
        target: {
          title: 'Target/Objectives',
          instructions: 'Please enter your audience\'s information',
          form: {
            age: {
              label: 'Age',
              helper: 'years'
            },
            gender: {
              label: 'Gender',
              values: {
                male: 'Mostly Women',
                female: 'Mostly Men',
                split: 'Equally Men & Women'
              }
            },
            nrssg: {
              label: 'Socioeconomic Status',
              values: {
                a: 'A',
                b: 'B',
                c1: 'C1',
                c2: 'C2',
                d: 'D',
                e: 'E'
              }
            },
            countries: {
              all: 'All',
              label: 'Country'
            },
            cities: {
              all: 'All',
              label: 'Cities'
            },
            languages: {
              all: 'All',
              label: 'Languages'
            },
            description: {
              label: 'Description',
              placeholder: 'Add a brief description about the profile of this audience.'
            },
            all: 'All',
            objectives: {
              increaseFollowers: 'Increase followers',
              increaseViews: 'Increase visits',
              increaseShares: 'Increase post\'s shares',
              increaseEngagement: 'Increase engagement',
              increaseLikes: 'Increase Likes',
              increaseTrafficHours: 'Increase hours of traffic to profile',
              reachNewMarkets: 'Reach new markets',
              increaseSpeaking: 'Increase the number of people that speak about you',
              increasePlays: 'Increase video playbacks',
              increaseWebsiteTraffic: 'Increase website traffic',
              positionTarget: 'Position your brand in target marker',
              keepTarget: 'Keep your market position',
              presence: 'Have more presence with followers',
              positionNewMarkets: 'Position your brand in new markets',
            },
            proposal: {
              objectives: {
                placeholder: 'Propose a new objective'
              },
              modals: {
                error: {
                  title: 'Error',
                  description: 'There was an error in your request. Please contact customer support.'
                },
                done: {
                  title: 'Done!',
                  description: 'Thanks for your proposal'
                }
              }
            }
          },
          sections: {
            own: {
              title: 'Audience',
              description: 'Please describe your audience.'
            },
            target: {
              title: 'Target',
              description: 'Please describe the target you wish.'
            }
          },
          helpers: {
            noSelect: 'Not Selected'
          }
        },
        pricing: {
          title: 'Pricing',
          instructions: 'Posts Pricing',
          form: {
            hour:'Hour without publishing',
            day:'Day without publishing',
            values: {
              account: 'Your account has an approximate value of:',
              post: 'Your posts have an approximate value of:'
            },
            post: 'Post',
            profilePicture: 'Profile Picture',
            coverPhoto: 'Cover Photo',
            noPost: {
              hour: 'Hour  Without Posting',
              day: 'Day Without Posting'
            },
            share: 'Share Post',
            partnership: 'Partnership',
            ambassador: 'Brand Ambassador',
            legend: 'All prices are established in USD.'
          }
        },
        settings: {
          title: 'Settings',
          instructions: 'Enter the following information.',
          form: {
            name: 'Account\'s Name',
            accountIs: {
              title: 'This account is?',
              brand: 'Brand',
              influencer: 'Influencer',
              badges: {
                brand: 'B',
                influencer: 'I'
              }
            },
            groups: {
              label: 'Groups',
              placeholder: 'Add Tags to order your accounts and group them.'
            },
            manager: {
              title: 'Current Manager',
              youAre: 'You are the current manager.',
              edit: 'Edit'
            },
            invite: {
              title: 'Invite to manage my account',
              send: 'Send Invite',
              placeholder: 'Email',
              success: {
                title: 'Done!',
                description: 'Your invite has been sent',
                confirm: 'Ok'
              },
              error: {
                invalid: 'The Email Address is Invalid',
                failed: 'Invite Failed',
                self: 'Can\'t invite yourself'
              },
              sent: {
                delete:{
                  label: 'Delete account',
                },
                label: 'Invite Sent To',
                delete: {
                  label: 'Delete Invite',
                  confirm: {
                    title: 'Are you sure?',
                    description: 'This action cannot be reverted.',
                    confirm: 'Yes, I\'m sure',
                    cancel: 'Cancel'
                  }
                },
                status: {
                  pending: 'Pending',
                  sent: 'Sent',
                  accepted: 'Accepted',
                  rejected: 'Rejected'
                },
                error: 'Invite Delete Failed',
                success: 'Invite Deleted'
              },
              shares: {
                title: 'Share this account with other users',
                current: 'Shared with',
                pending: 'Pending invites',
                form: {
                  title: 'New Account Share'
                }
              }
            },
            deleteAccount: 'Delete Account'
          },
          delete: {
            main: {
              title: 'Are you sure?',
              description: 'This account will be submitted for deletion after it\'s reviewed by one of our account specialists.',
              confirm: 'Yes, delete it!',
              cancel: 'Cancel'
            },
            error: {
              title: 'Error',
              description: 'There was an error in your request. Please contact customer support.'
            },
            done: {
              title: 'Done!',
              description: 'We\'ll contact you shortly.'
            }
          }
        },
        status: {
          title: 'Analytics',
          soon: {
            title: 'We are gathering your data.'
          },
          follows: {
            following: 'Following',
            followers: 'Followers',
            profileLikes: 'Profile Likes'
          },
          engagement: {
            label: 'Engagement'
          },
          posts: {
            posts: 'Posts',
            postsPerDay: 'Posts per Day'
          },
          likes: {
            likes: 'Likes',
            likesPerPost: 'Likes per Post'
          },
          comments: {
            comments: 'Comments',
            commentsPerPost: 'Comments per Post'
          },
          retweets: {
            retweets: 'Retweets',
            retweetsPerPost: 'Retweets per Post'
          },
          shares: {
            shares: 'Shares',
            sharesPerPost: 'Shares per Post'
          },
          favorites: {
            favorites: 'Favorites',
            favoritesPerPost: 'Favorites per Post'
          }
        },
        summary: {
          title: 'Summary',
          people: {
            owner: 'Owner',
            manager: 'Manager',
            shares: 'Collaborators'
          },
          information: {
            information: 'Information',
            profile: 'Profile',
            campaigns: {
              title: 'No. of Campaigns',
              labels: {
                total: 'Total',
                created: 'Created',
                partOf: 'Part of'
              }
            },
            categories: 'Categories',
            specialty: 'Specialty',
            groups: 'Groups',
            areas: 'Areas'
          },
          gallery: {
            images: 'Images',
            video: 'Video'
          }
        },
        calendar: {
          title: 'Calendar',
          publish: {
            button: 'Schedule Post'
          },
          filters: {
            all: 'All Posts',
            draft: 'Draft Posts',
            pending: 'Pending Posts',
            sent: 'Sent Posts',
            accepted: 'Accepted Posts',
            rejected: 'Rejected Posts',
            scheduled: 'Scheduled Posts',
            published: 'Published Posts',
            completed: 'Completed Posts',
            cancelled: 'Cancelled Posts',
            suspended: 'Suspended Posts'
          }
        }
      },
      saveMessage: 'Account Saved',
      saveButton: 'Save'
    },
    menu: 'Accounts',
    empty: {
      message: 'You have no accounts yet.',
      button: 'Connect Account'
    },
    connect: {
      question: 'Which social network do you want to connect?',
      message: 'If you will add a new account, Please log out the social network that you want to connect',
      account_added: 'All accounts have already been added',
      notie: {
        error: 'Failed to connect account.',
        connected: 'This account have already been connected.'
      }
    },
    list: {
      new: 'Connect Account',
      table: {
        headers: {
          owner: 'Owner',
          edit: 'Edit',
          index: '#',
          account: 'Account',
          license: 'License',
          rating: 'Rating',
          network: 'Network',
          profile: 'Profiles',
          brand: 'Brand',
          influencer: 'Influencer',
          tags: 'Groups',
          manager: 'Manager',
          collaborators: 'Shares',
          campaigns: 'Campaigns'
        },
        search: 'Search',
        empty: 'No Results'
      }
    },
    invite: {
      title: 'has invited you to manage this account.',
      accept: 'Accept',
      decline: 'Decline',
      error: {
        title: 'Error',
        description: 'This invite is intended for another user.'
      }
    }
  },
  es: {
    edit: {
      tabs: {
        concept: {
          title: 'Concepto',
          instructions: 'Ingresa tus datos en los siguientes campos.',
          form: {
            description: 'Descripci??n de la persona/personaje/concepto',
            occupation: 'Ocupaci??n',
            profession: 'Profesi??n',
            subjects: {
              primary: 'Temas Principales',
              secondary: 'Temas Secundarios',
              forbidden: 'Temas Prohibidos'
            },
            keywords: 'Palabras Clave',
            likes: 'Gustos e Intereses',
            motivations: 'Motivaciones'
          }
        },
        gallery: {
          title: 'Galer??a',
          images: {
            title: 'Im??genes',
            newAlbum: {
              title: '??C??mo se llama tu ??lbum?',
              confirm: 'Agregar ??lbum',
              cancel: 'Cancelar'
            },
            empty: {
              message: 'A??n no tienes im??genes..',
              button: 'Subir Im??gen'
            },
            list: {
              newImage: 'Agregar Imagen',
              newAlbum: 'Agregar ??lbum'
            },
            delete: {
              albumHelper: 'Borrar ??lbum',
              title: '??Est??s seguro?',
              description: 'No podr??s revertir esta acci??n!',
              confirm: 'Si, eliminarlos.',
              cancel: 'Cancelar'
            }
          },
          videos: {
            title: 'Videos',
            newAlbum: {
              title: '??C??mo se llama tu ??lbum?',
              confirm: 'Agregar ??lbum',
              cancel: 'Cancelar'
            },
            new: {
              title: 'Introduce la URL de tu video',
              confirm: 'Agregar Video',
              cancel: 'Cancelar'
            },
            list: {
              newVideo: 'Agregar Video',
              newAlbum: 'Agregar ??lbum'
            },
            empty: {
              message: 'A??n no tienes videos',
              button: 'Nuevo Video'
            },
            delete: {
              albumHelper: 'Borrar ??lbum',
              title: '??Est??s seguro?',
              description: 'No podr??s revertir esta acci??n!',
              confirm: 'Si, eliminarlo.',
              cancel: 'Cancelar'
            }
          }
        },
        information: {
          title: 'Informaci??n',
          instructions: 'Ingresa tus datos personales en los siguientes campos.',
          form: {
            name: 'Nombre',
            surname: 'Apellido',
            save: 'Guardar',
            gender: {
              label: 'Genero',
              values: {
                male: 'Masculino',
                female: 'Femenino'
              }
            },
            birthDate: 'Fecha de Nacimiento',
            maritalStatus: {
              label: 'Estado Civil',
              values: {
                single: 'Soltero',
                married: 'Casado'
              }
            },
            forbiddenSubjects: 'Temas Prohibidos',
            country: 'Pa??s',
            city: 'Ciudad',
            languages: 'Idiomas',
            sexualOrientation: {
              label: 'Orientaci??n Sexual',
              values: {
                heterosexual: 'Heterosexual',
                homosexual: 'Homosxual',
                bisexual: 'Bisexual',
                transexual: 'Transexual'
              }
            },
            likes: 'Gustos e Intereses',
            categories: 'Categor??as',
            specialties: 'Especialidades',
            description: {
              label: 'Brief Personal',
              description: 'Agrega una descripci??n de tu persona, personaje o marca.'
            },
            urlTitle: 'Ingresa tus p??ginas web.',
            url: 'URLs',
            proposal: {
              categories: {
                label: 'Proponer categorias',
                placeholder: 'Proponga su categoria'
              },
              specialties: {
                label: 'Proponer especialidades',
                categories: 'Selecione su categoria',
                placeholder: 'Proponga su especialidad'
              },
              modals: {
                error: {
                  title: 'Error',
                  description: 'Hubo un error en su solicitud. Por favor comuniquese con soporte.'
                },
                done: {
                  title: 'Listo!',
                  description: 'Gracias por su propuesta'
                }
              }
            }
          },
          helpers: {
            noSelect: 'No Seleccionado'
          }
        },
        target: {
          title: 'Target/Metas',
          instructions: 'Porfavor describe a tu audiencia',
          form: {
            age: {
              label: 'Edad',
              helper: 'a??os'
            },
            gender: {
              label: 'Genero',
              values: {
                male: 'Principalmente Mujeres',
                female: 'Principalmente Hombres',
                split: 'Igual entre Hombres & Mujeres'
              }
            },
            nrssg: {
              label: 'Nivel Socioecon??mico',
              values: {
                a: 'A',
                b: 'B',
                c1: 'C1',
                c2: 'C2',
                d: 'D',
                e: 'E'
              }
            },
            countries: {
              all: 'Todos',
              label: 'Pa??ses'
            },
            cities: {
              all: 'Todas',
              label: 'Ciudades'
            },
            languages: {
              all: 'Todos',
              label: 'Idiomas'
            },
            description: {
              label: 'Descripci??n del Perfil',
              placeholder: 'Agrega una breve descripci??n sobre el perfil que consideras tiene esta audiencia.'
            },
            all: 'Todos',
            objectives: {
              increaseFollowers: 'Aumentar tus seguidores',
              increaseViews: 'Aumentar tus visitas',
              increaseShares: 'Aumentar share en tus post',
              increaseEngagement: 'Aumentar tu engagement',
              increaseLikes: 'Aumentar tus likes',
              increaseTrafficHours: 'Aumentar horas de tr??fico en tu perfil',
              reachNewMarkets: 'Posicionarte en otras zonas geogr??ficas',
              increaseSpeaking: 'Aumentar el n??mero de gente que habla de ti',
              increasePlays: 'Aumentar reproduccione en tus videos',
              increaseWebsiteTraffic: 'Aumentar el tr??fico a tu p??gina web',
              positionTarget: 'Posicionar en tu target',
              keepTarget: 'Mantenimiento de posicionamiento en tu target',
              presence: 'Tener mayor presencia y/o presencia constante con mis seguidores',
              positionNewMarkets: 'Posicionarte en nuevos mercados',
            },
            proposal: {
              objectives: {
                placeholder: 'Sugerir una nueva meta'
              },
              modals: {
                error: {
                  title: 'Error',
                  description: 'Hubo un error en su solicitud. Por favor comuniquese con soporte.'
                },
                done: {
                  title: 'Listo!',
                  description: 'Gracias por su propuesta'
                }
              }
            }
          },
          sections: {
            own: {
              title: 'Audiencia',
              description: 'Por favor, describe el target que deseas'
            },
            target: {
              title: 'Target',
              description: 'Porfavor describe el target que deseas.'
            }
          },
          helpers: {
            noSelect: 'No Seleccionado'
          }
        },
        pricing: {
          title: 'Costo de mis Publicaciones',
          instructions: 'Costo de mis publicaciones',
          form: {
            hour:'Hora sin publicar',
            day:'D??a sin publicar',
            values: {
              account: 'Tu cuenta tiene un valor aproximado de:',
              post: 'Tu post tiene un valor aproximado de:'
            },
            post: 'Post',
            profilePicture: 'Foto de Perfil',
            coverPhoto: 'Foto de Portada',
            noPost: {
              hour: 'Hora sin Publicar',
              day: 'D??a sin Publicar'
            },
            share: 'Compartir Post',
            partnership: 'Alianza',
            ambassador: 'Embajador de Marca',
            legend: 'Todos los valores estan establecidos en d??lares americanos.'
          }
        },
        settings: {
          title: 'Configuraciones',
          instructions: 'Ingresa los siguientes datos.',
          form: {
            name: 'Nombre de la cuenta',
            accountIs: {
              title: '????sta cuenta es?',
              brand: 'Marca',
              influencer: 'Influencer',
              badges: {
                brand: 'M',
                influencer: 'I'
              }
            },
            groups: {
              label: 'Grupos',
              placeholder: 'Agrega TAGS para ordenar tus perfiles y agruparlos.'
            },
            manager: {
              title: 'Administrador Actual',
              youAre: 'Tu eres el administrador actual.',
              edit: 'Editar'
            },
            invite: {
              delete:{
                label: 'Eliminar Cuenta',
              },
              title: 'Delega la administraci??n de este perfil a:',
              send: 'Enviar Invitaci??n',
              placeholder: 'Email',
              success: {
                title: 'Listo!',
                description: 'Tu invitaci??n ha sido enviada',
                confirm: 'Ok'
              },
              error: {
                invalid: 'Direcci??n de correo inv??lida',
                failed: 'Fall?? la invitaci??n',
                self: 'No puedes invitarte a ti mismo'
              },
              sent: {
                label: 'Invitaci??n enviada a',
                delete: {
                  label: 'Borrar Invitaci??n',
                  confirm: {
                    title: 'Estas seguro?',
                    description: 'Esta acci??n no puede ser revertida.',
                    confirm: 'Si, estoy seguro',
                    cancel: 'Cancelar'
                  }
                },
                status: {
                  pending: 'Pendeinte',
                  sent: 'Enviada',
                  accepted: 'Aceptada',
                  rejected: 'Rechazada'
                },
                error: 'Falla al borrar la invitaci??n',
                success: 'Invitaci??n borrada'
              },
              shares: {
                title: 'Invita a alguien a colaborar en este perfil.',
                current: 'Colaboradores:',
                pending: 'Invitaciones Pendientes',
                form: {
                  title: 'Agregar colaboradores auxiliares para administrar este perfil:'
                }
              }
            },
          },
          delete: {
            label: 'Eliminar Cuenta',
            main: {
              title: '??Est??s seguro?',
              description: 'Esta cuenta ser?? marcada para eliminaci??n despu??s de que uno de nuestros ejecutivos de cuenta se ponga en contacto.',
              confirm: 'Si, eliminar cuenta.',
              cancel: 'Cancelar'
            },
            error: {
              title: 'Error',
              description: 'Hubo un error en su solicitud. Por favor comuniquese con soporte.'
            },
            done: {
              title: 'Listo!',
              description: 'En breve estaremos en contacto.'
            }
          }
        },
        status: {
          title: 'Anal??ticas',
          soon: {
            title: 'Estamos recopilando tu informaci??n.'
          },
          follows: {
            following: 'Siguiendo',
            followers: 'Seguidores',
            profileLikes: 'Likes del Perfil'
          },
          engagement: {
            label: 'Engagement'
          },
          posts: {
            posts: 'Posts',
            postsPerDay: 'Posts por D??a'
          },
          likes: {
            likes: 'Likes',
            likesPerPost: 'Likes por D??a'
          },
          comments: {
            comments: 'Commentarios',
            commentsPerPost: 'Commentarios por D??a'
          },
          retweets: {
            retweets: 'Retweets',
            retweetsPerPost: 'Retweets por D??a'
          },
          shares: {
            shares: 'Shares',
            sharesPerPost: 'Shares por D??a'
          },
          favorites: {
            favorites: 'Favoritos',
            favoritesPerPost: 'Favoritos por D??a'
          }
        },
        summary: {
          title: 'Resumen',
          people: {
            owner: 'Titular',
            manager: 'Administraci??n',
            shares: 'Collaboradores'
          },
          information: {
            information: 'Informaci??n',
            profile: 'Perfil',
            campaigns: {
              title: 'No. de Campa??as',
              labels: {
                total: 'Total',
                created: 'Creadas',
                partOf: 'Participantes'
              }
            },
            categories: 'Categor??as',
            specialty: 'Especialidades',
            groups: 'Groups',
            areas: '??reas'
          },
          gallery: {
            images: 'Foto',
            video: 'Video'
          }
        },
        calendar: {
          title: 'Calendario',
          publish: {
            button: 'Programar Publicaci??n'
          },
          filters: {
            all: 'Todas las Publicaciones',
            draft: 'Publicaciones Borradores',
            pending: 'Publicaciones Pendientes',
            sent: 'Publicaciones Enviadas',
            accepted: 'Publicaciones Aceptadas',
            rejected: 'Publicaciones Rechazadas',
            scheduled: 'Publicaciones Programadas',
            published: 'Publicaciones Publicadas',
            completed: 'Publicaciones Completadas',
            cancelled: 'Publicaciones Canceladas',
            suspended: 'Publicaciones Suspendidas'
          }
        }
      },
      saveMessage: 'Publicaci??n Guardada',
      saveButton: 'Guardar'
    },
    menu: 'Perfiles',
    empty: {
      message: 'A??n no tienes cuentas',
      button: 'A??adir Perfil'
    },
    connect: {
      question: '??Qu?? red social quieres conectar?',
      message: 'Si deseas agregar una cuenta nueva es necesario cerrar sesion en la red social que quieras conectar',
      account_added: 'Todas las cuentas han sido agregadas',
      notie: {
        error: 'Error al conectar la cuenta.',
        connected: 'Esta cuenta ya ha sido conectada.'
      }
    },
    list: {
      new: 'A??adir Perfil',
      table: {
        headers: {
          edit: 'Editar',
          owner: 'Titular',
          index: 'N??',
          account: 'Perfiles/Fan Pages',
          license: 'Licencia',
          rating: 'Calificaci??n',
          network: 'Red Social',
          profile: 'Perfiles',
          brand: 'Marca',
          influencer: 'Influencer',
          tags: 'Grupos',
          manager: 'Administrador',
          collaborators: 'Colaboradores',
          campaigns: 'N?? de Campa??as'
        },
        search: 'Buscar',
        empty: 'No hay resultados'
      }
    },
    invite: {
      title: 'te ha invitado a administrar esta cuenta.',
      accept: 'Aceptar',
      decline: 'Rechazar',
      error: {
        title: 'Error',
        description: 'Esta invitaci??n esta destinada para otro usuario.'
      }
    }
  },
  zz: {
    edit: {
      tabs: {
        concept: {
          title: '??????',
          instructions: '?????? ?????? ?????? ?????? ?????? ?????? ?????? ??????.',
          form: {
            description: '?????? ?????? ?????? ?????? ?????? ??????/??????/??????',
            occupation: '??????',
            profession: '??????',
            subjects: {
              primary: '?????? ??????',
              secondary: '?????? ??????',
              forbidden: '?????? ??????'
            },
            keywords: '??????',
            likes: '?????? & ??????',
            motivations: '??????'
          }
        },
        gallery: {
          title: '??????',
          newAlbum: {
            title: '?????? ?????? ?????? ?????? ???????',
            confirm: '?????? ??????',
            cancel: '??????'
          },
          images: {
            title: '??????',
            empty: {
              message: '?????? ?????? ?????? ?????? ??????.',
              button: '?????? ??????'
            },
            list: {
              newImage: '?????? ??????',
              newAlbum: '?????? ??????'
            },
            delete: {
              albumHelper: '?????? ??????',
              title: '?????? ???????',
              description: '?????? ?????? ?????? ?????? ??????!',
              confirm: '??????, ??????.',
              cancel: '??????'
            }
          },
          videos: {
            title: '??????',
            newAlbum: {
              title: '?????? ?????? ?????? ?????? ???????',
              confirm: '?????? ??????',
              cancel: '??????'
            },
            new: {
              title: '?????? ?????? ?????? ?????? ?????? ??????',
              confirm: '?????? ??????',
              cancel: '??????'
            },
            list: {
              newVideo: '?????? ??????'
            },
            empty: {
              message: '?????? ?????? ?????? ??????',
              button: '?????? ??????'
            },
            delete: {
              title: '?????? ???????',
              description: '?????? ?????? ?????? ?????? ??????!',
              confirm: '??????, ??????.',
              cancel: '??????'
            }
          }
        },
        information: {
          title: '??????',
          instructions: '?????? ?????? ?????? ?????? ?????? ?????? ?????? ??????.',
          form: {
            name: '??????',
            surname: '??????',
            gender: {
              label: '??????',
              values: {
                male: '??????',
                female: '??????'
              }
            },
            birthDate: '??????',
            maritalStatus: {
              label: '??????',
              values: {
                single: '??????',
                married: '??????'
              }
            },
            forbiddenSubjects: '?????? ??????',
            country: '??????',
            city: '??????',
            languages: '??????',
            sexualOrientation: {
              label: '??????',
              values: {
                heterosexual: '??????',
                homosexual: '??????',
                bisexual: '??????',
                transexual: '??????'
              }
            },
            likes: '??????',
            categories: '??????',
            specialties: '??????',
            description: {
              label: '??????',
              description: '?????? ?????? ?????? ?????? ?????? ??????, ?????? ?????? ??????.'
            },
            urlTitle: '??????',
            url: '??????',
            proposal: {
              categories: {
                label: '?????? ??????',
                placeholder: '?????? ?????? ??????'
              },
              specialties: {
                label: '?????? ??????',
                categories: '?????? ??????',
                placeholder: '?????? ?????? ??????'
              },
              modals: {
                error: {
                  title: '??????',
                  description: '?????? ?????? ?????? ?????? ?????? ?????? ??????. ?????? ?????? ?????? ??????.'
                },
                done: {
                  title: '??????!',
                  description: '?????? ?????? ?????? ??????'
                }
              }
            }
          },
          helpers: {
            noSelect: '?????? ??????'
          }
        },
        target: {
          title: '??????/??????',
          instructions: '?????? ?????? ?????? ?????? ??????',
          form: {
            age: {
              label: '??????',
              helper: '??????'
            },
            gender: {
              label: '??????',
              values: {
                male: '?????? ??????',
                female: '?????? ??????',
                split: '?????? ?????? ??????'
              }
            },
            nrssg: {
              label: '?????? ??????',
              values: {
                a: 'A',
                b: 'B',
                c1: 'C1',
                c2: 'C2',
                d: 'D',
                e: 'E'
              }
            },
            countries: {
              label: '??????'
            },
            cities: {
              label: '??????'
            },
            languages: {
              label: '??????'
            },
            description: {
              label: '??????',
              placeholder: '?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ??????.'
            },
            noSelect: '??????',
            objectives: {
              increaseFollowers: '?????? ??????',
              increaseViews: '?????? ??????',
              increaseShares: '?????? ?????? ??????',
              increaseEngagement: '?????? ??????',
              increaseLikes: '?????? ??????',
              increaseTrafficHours: '?????? ?????? ?????? ?????? ?????? ??????',
              reachNewMarkets: '?????? ?????? ??????',
              increaseSpeaking: '?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ??????',
              increasePlays: '?????? ?????? ??????',
              increaseWebsiteTraffic: '?????? ?????? ??????',
              positionTarget: '?????? ?????? ?????? ?????? ?????? ??????',
              keepTarget: '?????? ?????? ?????? ??????',
              presence: '?????? ?????? ?????? ?????? ??????',
              positionNewMarkets: '?????? ?????? ?????? ?????? ?????? ??????',
            },
            proposal: {
              objectives: {
                placeholder: '?????? ?????? ?????? ??????'
              },
              modals: {
                error: {
                  title: '??????',
                  description: '?????? ?????? ?????? ?????? ?????? ??????. ?????? ?????? ?????? ?????? ??????.'
                },
                done: {
                  title: '??????!',
                  description: '?????? ?????? ?????? ??????'
                }
              }
            }
          },
          sections: {
            own: {
              title: '??????',
              description: '?????? ?????? ?????? ??????.'
            },
            target: {
              title: '??????',
              description: '?????? ?????? ?????? ?????? ?????? ??????.'
            }
          },
          helpers: {
            noSelect: '?????? ??????'
          }
        },
        pricing: {
          title: '??????',
          instructions: '?????? ?????? ?????? ??????',
          form: {
            values: {
              account: '?????? ?????? ?????? ?????? ?????? ?????? ??????:',
              post: '?????? ?????? ?????? ?????? ?????? ?????? ??????:'
            },
            post: '??????',
            profilePicture: '?????? ?????? ??????',
            coverPhoto: '?????? ?????? ??????',
            noPost: {
              hour: '?????? ?????? ??????',
              day: '?????? ?????? ??????'
            },
            share: '?????? ??????',
            partnership: '??????',
            ambassador: '?????? ?????? ??????',
            legend: '?????? ?????? ?????? ?????? ?????? ??????.'
          }
        },
        settings: {
          title: '??????',
          instructions: '?????? ?????? ?????? ??????.',
          form: {
            name: '??????\' ??????',
            accountIs: {
              title: '?????? ?????? ???????',
              brand: '??????',
              influencer: '??????',
              badges: {
                brand: '???',
                influencer: '???'
              }
            },
            groups: {
              label: '??????',
              placeholder: '?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ??????.'
            },
            manager: {
              title: '?????? ??????',
              youAre: '?????? ?????? ?????? ?????? ??????.',
              edit: '??????'
            },
            invite: {
              title: '?????? ?????? ?????? ?????? ??????',
              send: '?????? ??????',
              placeholder: '??????',
              success: {
                title: '??????!',
                description: '?????? ?????? ?????? ?????? ??????',
                confirm: '??????'
              },
              error: {
                invalid: '?????? ?????? ?????? ?????? ??????',
                failed: '?????? ??????',
                self: '?????? ?????? ??????'
              },
              sent: {
                label: '?????? ?????? ??????',
                delete: {
                  label: '?????? ??????',
                  confirm: {
                    title: '?????? ?????? ???????',
                    description: '?????? ?????? ?????? ?????? ??????.',
                    confirm: '??????, ?????? ??????',
                    cancel: '??????'
                  }
                },
                status: {
                  pending: '??????',
                  sent: '??????',
                  accepted: '??????',
                  rejected: '??????'
                },
                error: '?????? ?????? ??????',
                success: '?????? ??????'
              },
              shares: {
                title: '?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ??????',
                current: '?????? ??????',
                pending: '?????? ??????',
                form: {
                  title: '?????? ?????? ?????? ?????? ?????? ?????? ??????:'
                }
              }
            },
            deleteAccount: '?????? ??????'
          },
          delete: {
            main: {
              title: '?????? ?????? ???????',
              description: '?????? ?????? ?????? ?????? ?????? ?????? ?????? ?????? ??????\' ?????? ?????? ?????? ?????? ?????? ?????? ??????.',
              confirm: '??????, ?????? ??????!',
              cancel: '??????'
            },
            error: {
              title: '??????',
              description: '?????? ?????? ?????? ?????? ?????? ?????? ??????. ?????? ?????? ?????? ??????.'
            },
            done: {
              title: '??????!',
              description: '??????\' ?????? ?????? ??????.'
            }
          }
        },
        status: {
          title: '??????',
          soon: {
            title: '?????? ?????? ?????? ?????? ??????.'
          },
          follows: {
            following: '??????',
            followers: '??????',
            profileLikes: '?????? ??????'
          },
          engagement: {
            label: '??????'
          },
          posts: {
            posts: '??????',
            postsPerDay: '?????? ?????? ??????'
          },
          likes: {
            likes: '??????',
            likesPerPost: '?????? ?????? ??????'
          },
          comments: {
            comments: '??????',
            commentsPerPost: '?????? ?????? ??????'
          },
          retweets: {
            retweets: '??????',
            retweetsPerPost: '?????? ?????? ??????'
          },
          shares: {
            shares: '??????',
            sharesPerPost: '?????? ?????? ??????'
          },
          favorites: {
            favorites: '??????',
            favoritesPerPost: '?????? ?????? ??????'
          }
        },
        summary: {
          title: '??????',
          people: {
            owner: '??????',
            manager: '??????',
            shares: '??????'
          },
          information: {
            information: '??????',
            profile: '??????',
            campaigns: {
              title: '??????. ?????? ??????',
              labels: {
                total: '??????',
                created: '??????',
                partOf: '??????'
              }
            },
            categories: '??????',
            specialty: '??????',
            groups: '??????',
            areas: '??????'
          },
          gallery: {
            images: '??????',
            video: '??????'
          }
        },
        calendar: {
          title: '??????',
          publish: {
            button: '?????? ??????'
          },
          filters: {
            all: '??????',
            draft: '??????',
            pending: '??????',
            sent: '??????',
            accepted: '??????',
            rejected: '??????',
            scheduled: '??????',
            published: '??????',
            completed: '??????',
            cancelled: '??????',
            suspended: '??????'
          }
        }
      },
      saveMessage: '?????? ??????',
      saveButton: '??????'
    },
    menu: '??????',
    empty: {
      message: '?????? ?????? ?????? ??????',
      button: '?????? ??????'
    },
    list: {
      new: '?????? ??????',
      table: {
        headers: {
          edit: '??????',
          owner: '??????',
          index: '???',
          account: '??????',
          license: '????????????',
          network: '?????? ??????',
          profile: '?????? ??????',
          rating: '?????? ??????',
          brand: '??????',
          influencer: '??????',
          tags: '??????',
          manager: '??????',
          collaborators: '??????',
          campaigns: '??????'
        },
        search: '??????',
        empty: '?????? ??????'
      }
    },
    invite: {
      title: '?????? ?????? ?????? ?????? ?????? ?????? ??????.',
      accept: '??????',
      decline: '??????',
      error: {
        title: '??????',
        description: '?????? ?????? ?????? ?????? ?????? ?????? ??????.'
      }
    }
  }
};
