define ["app/app"], (App) ->

  App.module "Views", (Views, App, Backbone, Mn, $, _) ->

    class Views.CollectionView extends Mn.CollectionView

