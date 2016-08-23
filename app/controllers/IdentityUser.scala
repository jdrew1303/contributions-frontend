package controllers

import com.gu.identity.cookie.{IdentityCookieDecoder, ProductionKeys}
import com.gu.identity.model.User
import play.api.mvc.Request

object IdentityUser {
  val decoder = new IdentityCookieDecoder(new ProductionKeys)

  def fromRequest(request: Request[_]): Option[User] = {
    request.cookies.get("GU_U").flatMap { cookie =>
      decoder.getUserDataForGuU(cookie.value)
    } map(_.user)
  }

}
