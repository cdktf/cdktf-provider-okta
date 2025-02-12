# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-okta.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-okta.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user okta_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.user.User.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user.User;

User.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .email(java.lang.String)
    .firstName(java.lang.String)
    .lastName(java.lang.String)
    .login(java.lang.String)
//  .city(java.lang.String)
//  .costCenter(java.lang.String)
//  .countryCode(java.lang.String)
//  .customProfileAttributes(java.lang.String)
//  .customProfileAttributesToIgnore(java.util.List<java.lang.String>)
//  .department(java.lang.String)
//  .displayName(java.lang.String)
//  .division(java.lang.String)
//  .employeeNumber(java.lang.String)
//  .expirePasswordOnCreate(java.lang.Boolean)
//  .expirePasswordOnCreate(IResolvable)
//  .honorificPrefix(java.lang.String)
//  .honorificSuffix(java.lang.String)
//  .id(java.lang.String)
//  .locale(java.lang.String)
//  .manager(java.lang.String)
//  .managerId(java.lang.String)
//  .middleName(java.lang.String)
//  .mobilePhone(java.lang.String)
//  .nickName(java.lang.String)
//  .oldPassword(java.lang.String)
//  .organization(java.lang.String)
//  .password(java.lang.String)
//  .passwordHash(UserPasswordHash)
//  .passwordInlineHook(java.lang.String)
//  .postalAddress(java.lang.String)
//  .preferredLanguage(java.lang.String)
//  .primaryPhone(java.lang.String)
//  .profileUrl(java.lang.String)
//  .recoveryAnswer(java.lang.String)
//  .recoveryQuestion(java.lang.String)
//  .secondEmail(java.lang.String)
//  .skipRoles(java.lang.Boolean)
//  .skipRoles(IResolvable)
//  .state(java.lang.String)
//  .status(java.lang.String)
//  .streetAddress(java.lang.String)
//  .timezone(java.lang.String)
//  .title(java.lang.String)
//  .userType(java.lang.String)
//  .zipCode(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | User primary email address. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.firstName">firstName</a></code> | <code>java.lang.String</code> | User first name. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.lastName">lastName</a></code> | <code>java.lang.String</code> | User last name. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.login">login</a></code> | <code>java.lang.String</code> | User Okta login. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.city">city</a></code> | <code>java.lang.String</code> | User city. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.costCenter">costCenter</a></code> | <code>java.lang.String</code> | User cost center. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.countryCode">countryCode</a></code> | <code>java.lang.String</code> | User country code. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.customProfileAttributes">customProfileAttributes</a></code> | <code>java.lang.String</code> | JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.customProfileAttributesToIgnore">customProfileAttributesToIgnore</a></code> | <code>java.util.List<java.lang.String></code> | List of custom_profile_attribute keys that should be excluded from being managed by Terraform. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.department">department</a></code> | <code>java.lang.String</code> | User department. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User display name, suitable to show end users. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.division">division</a></code> | <code>java.lang.String</code> | User division. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.employeeNumber">employeeNumber</a></code> | <code>java.lang.String</code> | User employee number. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.expirePasswordOnCreate">expirePasswordOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to `true`, the user will have to change the password at the next login. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.honorificPrefix">honorificPrefix</a></code> | <code>java.lang.String</code> | User honorific prefix. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.honorificSuffix">honorificSuffix</a></code> | <code>java.lang.String</code> | User honorific suffix. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.locale">locale</a></code> | <code>java.lang.String</code> | User default location. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.manager">manager</a></code> | <code>java.lang.String</code> | Manager of User. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.managerId">managerId</a></code> | <code>java.lang.String</code> | Manager ID of User. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.middleName">middleName</a></code> | <code>java.lang.String</code> | User middle name. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.mobilePhone">mobilePhone</a></code> | <code>java.lang.String</code> | User mobile phone number. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.nickName">nickName</a></code> | <code>java.lang.String</code> | User nickname. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.oldPassword">oldPassword</a></code> | <code>java.lang.String</code> | Old User Password. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | User organization. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | User Password. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.passwordHash">passwordHash</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | password_hash block. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.passwordInlineHook">passwordInlineHook</a></code> | <code>java.lang.String</code> | Specifies that a Password Import Inline Hook should be triggered to handle verification of the user's password the first time the user logs in. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.postalAddress">postalAddress</a></code> | <code>java.lang.String</code> | User mailing address. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | User preferred language. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.primaryPhone">primaryPhone</a></code> | <code>java.lang.String</code> | User primary phone number. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | User online profile (web page). |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.recoveryAnswer">recoveryAnswer</a></code> | <code>java.lang.String</code> | User Password Recovery Answer. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.recoveryQuestion">recoveryQuestion</a></code> | <code>java.lang.String</code> | User Password Recovery Question. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.secondEmail">secondEmail</a></code> | <code>java.lang.String</code> | User secondary email address, used for account recovery. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.skipRoles">skipRoles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | User state or region. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | User profile property. Valid values are `ACTIVE`, `DEPROVISIONED`, `STAGED`, `SUSPENDED`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | User street address. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | User default timezone. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | User title. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.userType">userType</a></code> | <code>java.lang.String</code> | User employee type. |
| <code><a href="#@cdktf/provider-okta.user.User.Initializer.parameter.zipCode">zipCode</a></code> | <code>java.lang.String</code> | User zipcode or postal code. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.user.User.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.user.User.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.user.User.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.user.User.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.user.User.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.User.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.user.User.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.user.User.Initializer.parameter.email"></a>

- *Type:* java.lang.String

User primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#email User#email}

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-okta.user.User.Initializer.parameter.firstName"></a>

- *Type:* java.lang.String

User first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#first_name User#first_name}

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-okta.user.User.Initializer.parameter.lastName"></a>

- *Type:* java.lang.String

User last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#last_name User#last_name}

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.user.User.Initializer.parameter.login"></a>

- *Type:* java.lang.String

User Okta login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#login User#login}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-okta.user.User.Initializer.parameter.city"></a>

- *Type:* java.lang.String

User city.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#city User#city}

---

##### `costCenter`<sup>Optional</sup> <a name="costCenter" id="@cdktf/provider-okta.user.User.Initializer.parameter.costCenter"></a>

- *Type:* java.lang.String

User cost center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#cost_center User#cost_center}

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-okta.user.User.Initializer.parameter.countryCode"></a>

- *Type:* java.lang.String

User country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#country_code User#country_code}

---

##### `customProfileAttributes`<sup>Optional</sup> <a name="customProfileAttributes" id="@cdktf/provider-okta.user.User.Initializer.parameter.customProfileAttributes"></a>

- *Type:* java.lang.String

JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#custom_profile_attributes User#custom_profile_attributes}

---

##### `customProfileAttributesToIgnore`<sup>Optional</sup> <a name="customProfileAttributesToIgnore" id="@cdktf/provider-okta.user.User.Initializer.parameter.customProfileAttributesToIgnore"></a>

- *Type:* java.util.List<java.lang.String>

List of custom_profile_attribute keys that should be excluded from being managed by Terraform.

This is useful in situations where specific custom fields may contain sensitive information and should be managed outside of Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#custom_profile_attributes_to_ignore User#custom_profile_attributes_to_ignore}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-okta.user.User.Initializer.parameter.department"></a>

- *Type:* java.lang.String

User department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#department User#department}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-okta.user.User.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User display name, suitable to show end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#display_name User#display_name}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-okta.user.User.Initializer.parameter.division"></a>

- *Type:* java.lang.String

User division.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#division User#division}

---

##### `employeeNumber`<sup>Optional</sup> <a name="employeeNumber" id="@cdktf/provider-okta.user.User.Initializer.parameter.employeeNumber"></a>

- *Type:* java.lang.String

User employee number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#employee_number User#employee_number}

---

##### `expirePasswordOnCreate`<sup>Optional</sup> <a name="expirePasswordOnCreate" id="@cdktf/provider-okta.user.User.Initializer.parameter.expirePasswordOnCreate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to `true`, the user will have to change the password at the next login.

This property will be used when user is being created and works only when `password` field is set. Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#expire_password_on_create User#expire_password_on_create}

---

##### `honorificPrefix`<sup>Optional</sup> <a name="honorificPrefix" id="@cdktf/provider-okta.user.User.Initializer.parameter.honorificPrefix"></a>

- *Type:* java.lang.String

User honorific prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#honorific_prefix User#honorific_prefix}

---

##### `honorificSuffix`<sup>Optional</sup> <a name="honorificSuffix" id="@cdktf/provider-okta.user.User.Initializer.parameter.honorificSuffix"></a>

- *Type:* java.lang.String

User honorific suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#honorific_suffix User#honorific_suffix}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.user.User.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-okta.user.User.Initializer.parameter.locale"></a>

- *Type:* java.lang.String

User default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#locale User#locale}

---

##### `manager`<sup>Optional</sup> <a name="manager" id="@cdktf/provider-okta.user.User.Initializer.parameter.manager"></a>

- *Type:* java.lang.String

Manager of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#manager User#manager}

---

##### `managerId`<sup>Optional</sup> <a name="managerId" id="@cdktf/provider-okta.user.User.Initializer.parameter.managerId"></a>

- *Type:* java.lang.String

Manager ID of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#manager_id User#manager_id}

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="@cdktf/provider-okta.user.User.Initializer.parameter.middleName"></a>

- *Type:* java.lang.String

User middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#middle_name User#middle_name}

---

##### `mobilePhone`<sup>Optional</sup> <a name="mobilePhone" id="@cdktf/provider-okta.user.User.Initializer.parameter.mobilePhone"></a>

- *Type:* java.lang.String

User mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `nickName`<sup>Optional</sup> <a name="nickName" id="@cdktf/provider-okta.user.User.Initializer.parameter.nickName"></a>

- *Type:* java.lang.String

User nickname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#nick_name User#nick_name}

---

##### `oldPassword`<sup>Optional</sup> <a name="oldPassword" id="@cdktf/provider-okta.user.User.Initializer.parameter.oldPassword"></a>

- *Type:* java.lang.String

Old User Password.

Should be only set in case the password was not changed using the provider. fter successful password change this field should be removed and `password` field should be used for further changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#old_password User#old_password}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-okta.user.User.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

User organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#organization User#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.user.User.Initializer.parameter.password"></a>

- *Type:* java.lang.String

User Password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#password User#password}

---

##### `passwordHash`<sup>Optional</sup> <a name="passwordHash" id="@cdktf/provider-okta.user.User.Initializer.parameter.passwordHash"></a>

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

password_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#password_hash User#password_hash}

---

##### `passwordInlineHook`<sup>Optional</sup> <a name="passwordInlineHook" id="@cdktf/provider-okta.user.User.Initializer.parameter.passwordInlineHook"></a>

- *Type:* java.lang.String

Specifies that a Password Import Inline Hook should be triggered to handle verification of the user's password the first time the user logs in.

This allows an existing password to be imported into Okta directly from some other store. When updating a user with a password hook the user must be in the `STAGED` status. The `password` field should not be specified when using Password Import Inline Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#password_inline_hook User#password_inline_hook}

---

##### `postalAddress`<sup>Optional</sup> <a name="postalAddress" id="@cdktf/provider-okta.user.User.Initializer.parameter.postalAddress"></a>

- *Type:* java.lang.String

User mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#postal_address User#postal_address}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktf/provider-okta.user.User.Initializer.parameter.preferredLanguage"></a>

- *Type:* java.lang.String

User preferred language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#preferred_language User#preferred_language}

---

##### `primaryPhone`<sup>Optional</sup> <a name="primaryPhone" id="@cdktf/provider-okta.user.User.Initializer.parameter.primaryPhone"></a>

- *Type:* java.lang.String

User primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#primary_phone User#primary_phone}

---

##### `profileUrl`<sup>Optional</sup> <a name="profileUrl" id="@cdktf/provider-okta.user.User.Initializer.parameter.profileUrl"></a>

- *Type:* java.lang.String

User online profile (web page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#profile_url User#profile_url}

---

##### `recoveryAnswer`<sup>Optional</sup> <a name="recoveryAnswer" id="@cdktf/provider-okta.user.User.Initializer.parameter.recoveryAnswer"></a>

- *Type:* java.lang.String

User Password Recovery Answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#recovery_answer User#recovery_answer}

---

##### `recoveryQuestion`<sup>Optional</sup> <a name="recoveryQuestion" id="@cdktf/provider-okta.user.User.Initializer.parameter.recoveryQuestion"></a>

- *Type:* java.lang.String

User Password Recovery Question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#recovery_question User#recovery_question}

---

##### `secondEmail`<sup>Optional</sup> <a name="secondEmail" id="@cdktf/provider-okta.user.User.Initializer.parameter.secondEmail"></a>

- *Type:* java.lang.String

User secondary email address, used for account recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#second_email User#second_email}

---

##### `skipRoles`<sup>Optional</sup> <a name="skipRoles" id="@cdktf/provider-okta.user.User.Initializer.parameter.skipRoles"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#skip_roles User#skip_roles}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-okta.user.User.Initializer.parameter.state"></a>

- *Type:* java.lang.String

User state or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#state User#state}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.user.User.Initializer.parameter.status"></a>

- *Type:* java.lang.String

User profile property. Valid values are `ACTIVE`, `DEPROVISIONED`, `STAGED`, `SUSPENDED`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#status User#status}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-okta.user.User.Initializer.parameter.streetAddress"></a>

- *Type:* java.lang.String

User street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#street_address User#street_address}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-okta.user.User.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

User default timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#timezone User#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-okta.user.User.Initializer.parameter.title"></a>

- *Type:* java.lang.String

User title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#title User#title}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.user.User.Initializer.parameter.userType"></a>

- *Type:* java.lang.String

User employee type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#user_type User#user_type}

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-okta.user.User.Initializer.parameter.zipCode"></a>

- *Type:* java.lang.String

User zipcode or postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#zip_code User#zip_code}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.user.User.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.user.User.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.user.User.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.user.User.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.user.User.putPasswordHash">putPasswordHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCostCenter">resetCostCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCustomProfileAttributes">resetCustomProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetCustomProfileAttributesToIgnore">resetCustomProfileAttributesToIgnore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetDepartment">resetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetDivision">resetDivision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetEmployeeNumber">resetEmployeeNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetExpirePasswordOnCreate">resetExpirePasswordOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetHonorificPrefix">resetHonorificPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetHonorificSuffix">resetHonorificSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetManager">resetManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetManagerId">resetManagerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetMiddleName">resetMiddleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetMobilePhone">resetMobilePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetNickName">resetNickName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetOldPassword">resetOldPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPasswordHash">resetPasswordHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPasswordInlineHook">resetPasswordInlineHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPostalAddress">resetPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPreferredLanguage">resetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetPrimaryPhone">resetPrimaryPhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetProfileUrl">resetProfileUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetRecoveryAnswer">resetRecoveryAnswer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetRecoveryQuestion">resetRecoveryQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetSecondEmail">resetSecondEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetSkipRoles">resetSkipRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetUserType">resetUserType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.resetZipCode">resetZipCode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.user.User.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.user.User.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.user.User.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.User.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.user.User.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.user.User.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.user.User.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.user.User.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.user.User.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.user.User.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.user.User.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.user.User.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.user.User.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.user.User.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.user.User.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.user.User.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.user.User.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.user.User.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.user.User.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.user.User.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.user.User.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.user.User.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.User.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.user.User.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.user.User.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.user.User.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.user.User.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.user.User.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.user.User.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.user.User.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPasswordHash` <a name="putPasswordHash" id="@cdktf/provider-okta.user.User.putPasswordHash"></a>

```java
public void putPasswordHash(UserPasswordHash value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.User.putPasswordHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---

##### `resetCity` <a name="resetCity" id="@cdktf/provider-okta.user.User.resetCity"></a>

```java
public void resetCity()
```

##### `resetCostCenter` <a name="resetCostCenter" id="@cdktf/provider-okta.user.User.resetCostCenter"></a>

```java
public void resetCostCenter()
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-okta.user.User.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetCustomProfileAttributes` <a name="resetCustomProfileAttributes" id="@cdktf/provider-okta.user.User.resetCustomProfileAttributes"></a>

```java
public void resetCustomProfileAttributes()
```

##### `resetCustomProfileAttributesToIgnore` <a name="resetCustomProfileAttributesToIgnore" id="@cdktf/provider-okta.user.User.resetCustomProfileAttributesToIgnore"></a>

```java
public void resetCustomProfileAttributesToIgnore()
```

##### `resetDepartment` <a name="resetDepartment" id="@cdktf/provider-okta.user.User.resetDepartment"></a>

```java
public void resetDepartment()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-okta.user.User.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDivision` <a name="resetDivision" id="@cdktf/provider-okta.user.User.resetDivision"></a>

```java
public void resetDivision()
```

##### `resetEmployeeNumber` <a name="resetEmployeeNumber" id="@cdktf/provider-okta.user.User.resetEmployeeNumber"></a>

```java
public void resetEmployeeNumber()
```

##### `resetExpirePasswordOnCreate` <a name="resetExpirePasswordOnCreate" id="@cdktf/provider-okta.user.User.resetExpirePasswordOnCreate"></a>

```java
public void resetExpirePasswordOnCreate()
```

##### `resetHonorificPrefix` <a name="resetHonorificPrefix" id="@cdktf/provider-okta.user.User.resetHonorificPrefix"></a>

```java
public void resetHonorificPrefix()
```

##### `resetHonorificSuffix` <a name="resetHonorificSuffix" id="@cdktf/provider-okta.user.User.resetHonorificSuffix"></a>

```java
public void resetHonorificSuffix()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.user.User.resetId"></a>

```java
public void resetId()
```

##### `resetLocale` <a name="resetLocale" id="@cdktf/provider-okta.user.User.resetLocale"></a>

```java
public void resetLocale()
```

##### `resetManager` <a name="resetManager" id="@cdktf/provider-okta.user.User.resetManager"></a>

```java
public void resetManager()
```

##### `resetManagerId` <a name="resetManagerId" id="@cdktf/provider-okta.user.User.resetManagerId"></a>

```java
public void resetManagerId()
```

##### `resetMiddleName` <a name="resetMiddleName" id="@cdktf/provider-okta.user.User.resetMiddleName"></a>

```java
public void resetMiddleName()
```

##### `resetMobilePhone` <a name="resetMobilePhone" id="@cdktf/provider-okta.user.User.resetMobilePhone"></a>

```java
public void resetMobilePhone()
```

##### `resetNickName` <a name="resetNickName" id="@cdktf/provider-okta.user.User.resetNickName"></a>

```java
public void resetNickName()
```

##### `resetOldPassword` <a name="resetOldPassword" id="@cdktf/provider-okta.user.User.resetOldPassword"></a>

```java
public void resetOldPassword()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-okta.user.User.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.user.User.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPasswordHash` <a name="resetPasswordHash" id="@cdktf/provider-okta.user.User.resetPasswordHash"></a>

```java
public void resetPasswordHash()
```

##### `resetPasswordInlineHook` <a name="resetPasswordInlineHook" id="@cdktf/provider-okta.user.User.resetPasswordInlineHook"></a>

```java
public void resetPasswordInlineHook()
```

##### `resetPostalAddress` <a name="resetPostalAddress" id="@cdktf/provider-okta.user.User.resetPostalAddress"></a>

```java
public void resetPostalAddress()
```

##### `resetPreferredLanguage` <a name="resetPreferredLanguage" id="@cdktf/provider-okta.user.User.resetPreferredLanguage"></a>

```java
public void resetPreferredLanguage()
```

##### `resetPrimaryPhone` <a name="resetPrimaryPhone" id="@cdktf/provider-okta.user.User.resetPrimaryPhone"></a>

```java
public void resetPrimaryPhone()
```

##### `resetProfileUrl` <a name="resetProfileUrl" id="@cdktf/provider-okta.user.User.resetProfileUrl"></a>

```java
public void resetProfileUrl()
```

##### `resetRecoveryAnswer` <a name="resetRecoveryAnswer" id="@cdktf/provider-okta.user.User.resetRecoveryAnswer"></a>

```java
public void resetRecoveryAnswer()
```

##### `resetRecoveryQuestion` <a name="resetRecoveryQuestion" id="@cdktf/provider-okta.user.User.resetRecoveryQuestion"></a>

```java
public void resetRecoveryQuestion()
```

##### `resetSecondEmail` <a name="resetSecondEmail" id="@cdktf/provider-okta.user.User.resetSecondEmail"></a>

```java
public void resetSecondEmail()
```

##### `resetSkipRoles` <a name="resetSkipRoles" id="@cdktf/provider-okta.user.User.resetSkipRoles"></a>

```java
public void resetSkipRoles()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-okta.user.User.resetState"></a>

```java
public void resetState()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.user.User.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-okta.user.User.resetStreetAddress"></a>

```java
public void resetStreetAddress()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-okta.user.User.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-okta.user.User.resetTitle"></a>

```java
public void resetTitle()
```

##### `resetUserType` <a name="resetUserType" id="@cdktf/provider-okta.user.User.resetUserType"></a>

```java
public void resetUserType()
```

##### `resetZipCode` <a name="resetZipCode" id="@cdktf/provider-okta.user.User.resetZipCode"></a>

```java
public void resetZipCode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.user.User.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.user.User;

User.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.user.User.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.user.User.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.user.User;

User.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.user.User.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.user.User.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.user.User;

User.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.user.User.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.user.User.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.user.User;

User.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),User.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.user.User.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordHash">passwordHash</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference">UserPasswordHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.rawStatus">rawStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.costCenterInput">costCenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesInput">customProfileAttributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnoreInput">customProfileAttributesToIgnoreInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.departmentInput">departmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.divisionInput">divisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.employeeNumberInput">employeeNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.expirePasswordOnCreateInput">expirePasswordOnCreateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificPrefixInput">honorificPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificSuffixInput">honorificSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.loginInput">loginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerIdInput">managerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerInput">managerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.middleNameInput">middleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.mobilePhoneInput">mobilePhoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.nickNameInput">nickNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.oldPasswordInput">oldPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordHashInput">passwordHashInput</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInlineHookInput">passwordInlineHookInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.postalAddressInput">postalAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.preferredLanguageInput">preferredLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.primaryPhoneInput">primaryPhoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.profileUrlInput">profileUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryAnswerInput">recoveryAnswerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryQuestionInput">recoveryQuestionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.secondEmailInput">secondEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.skipRolesInput">skipRolesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.streetAddressInput">streetAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.userTypeInput">userTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.zipCodeInput">zipCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.costCenter">costCenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributes">customProfileAttributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnore">customProfileAttributesToIgnore</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.department">department</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.division">division</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.employeeNumber">employeeNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.expirePasswordOnCreate">expirePasswordOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificPrefix">honorificPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.honorificSuffix">honorificSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.login">login</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.manager">manager</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.managerId">managerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.middleName">middleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.mobilePhone">mobilePhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.nickName">nickName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.oldPassword">oldPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.passwordInlineHook">passwordInlineHook</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.postalAddress">postalAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.primaryPhone">primaryPhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryAnswer">recoveryAnswer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.recoveryQuestion">recoveryQuestion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.secondEmail">secondEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.skipRoles">skipRoles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.userType">userType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.User.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.user.User.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.user.User.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.user.User.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.user.User.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.user.User.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.user.User.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.user.User.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.user.User.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.user.User.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.user.User.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.user.User.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.user.User.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.User.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.user.User.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `passwordHash`<sup>Required</sup> <a name="passwordHash" id="@cdktf/provider-okta.user.User.property.passwordHash"></a>

```java
public UserPasswordHashOutputReference getPasswordHash();
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference">UserPasswordHashOutputReference</a>

---

##### `rawStatus`<sup>Required</sup> <a name="rawStatus" id="@cdktf/provider-okta.user.User.property.rawStatus"></a>

```java
public java.lang.String getRawStatus();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-okta.user.User.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `costCenterInput`<sup>Optional</sup> <a name="costCenterInput" id="@cdktf/provider-okta.user.User.property.costCenterInput"></a>

```java
public java.lang.String getCostCenterInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-okta.user.User.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `customProfileAttributesInput`<sup>Optional</sup> <a name="customProfileAttributesInput" id="@cdktf/provider-okta.user.User.property.customProfileAttributesInput"></a>

```java
public java.lang.String getCustomProfileAttributesInput();
```

- *Type:* java.lang.String

---

##### `customProfileAttributesToIgnoreInput`<sup>Optional</sup> <a name="customProfileAttributesToIgnoreInput" id="@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnoreInput"></a>

```java
public java.util.List<java.lang.String> getCustomProfileAttributesToIgnoreInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `departmentInput`<sup>Optional</sup> <a name="departmentInput" id="@cdktf/provider-okta.user.User.property.departmentInput"></a>

```java
public java.lang.String getDepartmentInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-okta.user.User.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `divisionInput`<sup>Optional</sup> <a name="divisionInput" id="@cdktf/provider-okta.user.User.property.divisionInput"></a>

```java
public java.lang.String getDivisionInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-okta.user.User.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `employeeNumberInput`<sup>Optional</sup> <a name="employeeNumberInput" id="@cdktf/provider-okta.user.User.property.employeeNumberInput"></a>

```java
public java.lang.String getEmployeeNumberInput();
```

- *Type:* java.lang.String

---

##### `expirePasswordOnCreateInput`<sup>Optional</sup> <a name="expirePasswordOnCreateInput" id="@cdktf/provider-okta.user.User.property.expirePasswordOnCreateInput"></a>

```java
public java.lang.Object getExpirePasswordOnCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-okta.user.User.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `honorificPrefixInput`<sup>Optional</sup> <a name="honorificPrefixInput" id="@cdktf/provider-okta.user.User.property.honorificPrefixInput"></a>

```java
public java.lang.String getHonorificPrefixInput();
```

- *Type:* java.lang.String

---

##### `honorificSuffixInput`<sup>Optional</sup> <a name="honorificSuffixInput" id="@cdktf/provider-okta.user.User.property.honorificSuffixInput"></a>

```java
public java.lang.String getHonorificSuffixInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.user.User.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-okta.user.User.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktf/provider-okta.user.User.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-okta.user.User.property.loginInput"></a>

```java
public java.lang.String getLoginInput();
```

- *Type:* java.lang.String

---

##### `managerIdInput`<sup>Optional</sup> <a name="managerIdInput" id="@cdktf/provider-okta.user.User.property.managerIdInput"></a>

```java
public java.lang.String getManagerIdInput();
```

- *Type:* java.lang.String

---

##### `managerInput`<sup>Optional</sup> <a name="managerInput" id="@cdktf/provider-okta.user.User.property.managerInput"></a>

```java
public java.lang.String getManagerInput();
```

- *Type:* java.lang.String

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="@cdktf/provider-okta.user.User.property.middleNameInput"></a>

```java
public java.lang.String getMiddleNameInput();
```

- *Type:* java.lang.String

---

##### `mobilePhoneInput`<sup>Optional</sup> <a name="mobilePhoneInput" id="@cdktf/provider-okta.user.User.property.mobilePhoneInput"></a>

```java
public java.lang.String getMobilePhoneInput();
```

- *Type:* java.lang.String

---

##### `nickNameInput`<sup>Optional</sup> <a name="nickNameInput" id="@cdktf/provider-okta.user.User.property.nickNameInput"></a>

```java
public java.lang.String getNickNameInput();
```

- *Type:* java.lang.String

---

##### `oldPasswordInput`<sup>Optional</sup> <a name="oldPasswordInput" id="@cdktf/provider-okta.user.User.property.oldPasswordInput"></a>

```java
public java.lang.String getOldPasswordInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-okta.user.User.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `passwordHashInput`<sup>Optional</sup> <a name="passwordHashInput" id="@cdktf/provider-okta.user.User.property.passwordHashInput"></a>

```java
public UserPasswordHash getPasswordHashInput();
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---

##### `passwordInlineHookInput`<sup>Optional</sup> <a name="passwordInlineHookInput" id="@cdktf/provider-okta.user.User.property.passwordInlineHookInput"></a>

```java
public java.lang.String getPasswordInlineHookInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.user.User.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `postalAddressInput`<sup>Optional</sup> <a name="postalAddressInput" id="@cdktf/provider-okta.user.User.property.postalAddressInput"></a>

```java
public java.lang.String getPostalAddressInput();
```

- *Type:* java.lang.String

---

##### `preferredLanguageInput`<sup>Optional</sup> <a name="preferredLanguageInput" id="@cdktf/provider-okta.user.User.property.preferredLanguageInput"></a>

```java
public java.lang.String getPreferredLanguageInput();
```

- *Type:* java.lang.String

---

##### `primaryPhoneInput`<sup>Optional</sup> <a name="primaryPhoneInput" id="@cdktf/provider-okta.user.User.property.primaryPhoneInput"></a>

```java
public java.lang.String getPrimaryPhoneInput();
```

- *Type:* java.lang.String

---

##### `profileUrlInput`<sup>Optional</sup> <a name="profileUrlInput" id="@cdktf/provider-okta.user.User.property.profileUrlInput"></a>

```java
public java.lang.String getProfileUrlInput();
```

- *Type:* java.lang.String

---

##### `recoveryAnswerInput`<sup>Optional</sup> <a name="recoveryAnswerInput" id="@cdktf/provider-okta.user.User.property.recoveryAnswerInput"></a>

```java
public java.lang.String getRecoveryAnswerInput();
```

- *Type:* java.lang.String

---

##### `recoveryQuestionInput`<sup>Optional</sup> <a name="recoveryQuestionInput" id="@cdktf/provider-okta.user.User.property.recoveryQuestionInput"></a>

```java
public java.lang.String getRecoveryQuestionInput();
```

- *Type:* java.lang.String

---

##### `secondEmailInput`<sup>Optional</sup> <a name="secondEmailInput" id="@cdktf/provider-okta.user.User.property.secondEmailInput"></a>

```java
public java.lang.String getSecondEmailInput();
```

- *Type:* java.lang.String

---

##### `skipRolesInput`<sup>Optional</sup> <a name="skipRolesInput" id="@cdktf/provider-okta.user.User.property.skipRolesInput"></a>

```java
public java.lang.Object getSkipRolesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-okta.user.User.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.user.User.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-okta.user.User.property.streetAddressInput"></a>

```java
public java.lang.String getStreetAddressInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-okta.user.User.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.user.User.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktf/provider-okta.user.User.property.userTypeInput"></a>

```java
public java.lang.String getUserTypeInput();
```

- *Type:* java.lang.String

---

##### `zipCodeInput`<sup>Optional</sup> <a name="zipCodeInput" id="@cdktf/provider-okta.user.User.property.zipCodeInput"></a>

```java
public java.lang.String getZipCodeInput();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-okta.user.User.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `costCenter`<sup>Required</sup> <a name="costCenter" id="@cdktf/provider-okta.user.User.property.costCenter"></a>

```java
public java.lang.String getCostCenter();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-okta.user.User.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `customProfileAttributes`<sup>Required</sup> <a name="customProfileAttributes" id="@cdktf/provider-okta.user.User.property.customProfileAttributes"></a>

```java
public java.lang.String getCustomProfileAttributes();
```

- *Type:* java.lang.String

---

##### `customProfileAttributesToIgnore`<sup>Required</sup> <a name="customProfileAttributesToIgnore" id="@cdktf/provider-okta.user.User.property.customProfileAttributesToIgnore"></a>

```java
public java.util.List<java.lang.String> getCustomProfileAttributesToIgnore();
```

- *Type:* java.util.List<java.lang.String>

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-okta.user.User.property.department"></a>

```java
public java.lang.String getDepartment();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-okta.user.User.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-okta.user.User.property.division"></a>

```java
public java.lang.String getDivision();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.user.User.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `employeeNumber`<sup>Required</sup> <a name="employeeNumber" id="@cdktf/provider-okta.user.User.property.employeeNumber"></a>

```java
public java.lang.String getEmployeeNumber();
```

- *Type:* java.lang.String

---

##### `expirePasswordOnCreate`<sup>Required</sup> <a name="expirePasswordOnCreate" id="@cdktf/provider-okta.user.User.property.expirePasswordOnCreate"></a>

```java
public java.lang.Object getExpirePasswordOnCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-okta.user.User.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `honorificPrefix`<sup>Required</sup> <a name="honorificPrefix" id="@cdktf/provider-okta.user.User.property.honorificPrefix"></a>

```java
public java.lang.String getHonorificPrefix();
```

- *Type:* java.lang.String

---

##### `honorificSuffix`<sup>Required</sup> <a name="honorificSuffix" id="@cdktf/provider-okta.user.User.property.honorificSuffix"></a>

```java
public java.lang.String getHonorificSuffix();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.user.User.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-okta.user.User.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-okta.user.User.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.user.User.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

---

##### `manager`<sup>Required</sup> <a name="manager" id="@cdktf/provider-okta.user.User.property.manager"></a>

```java
public java.lang.String getManager();
```

- *Type:* java.lang.String

---

##### `managerId`<sup>Required</sup> <a name="managerId" id="@cdktf/provider-okta.user.User.property.managerId"></a>

```java
public java.lang.String getManagerId();
```

- *Type:* java.lang.String

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktf/provider-okta.user.User.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktf/provider-okta.user.User.property.mobilePhone"></a>

```java
public java.lang.String getMobilePhone();
```

- *Type:* java.lang.String

---

##### `nickName`<sup>Required</sup> <a name="nickName" id="@cdktf/provider-okta.user.User.property.nickName"></a>

```java
public java.lang.String getNickName();
```

- *Type:* java.lang.String

---

##### `oldPassword`<sup>Required</sup> <a name="oldPassword" id="@cdktf/provider-okta.user.User.property.oldPassword"></a>

```java
public java.lang.String getOldPassword();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-okta.user.User.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.user.User.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `passwordInlineHook`<sup>Required</sup> <a name="passwordInlineHook" id="@cdktf/provider-okta.user.User.property.passwordInlineHook"></a>

```java
public java.lang.String getPasswordInlineHook();
```

- *Type:* java.lang.String

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-okta.user.User.property.postalAddress"></a>

```java
public java.lang.String getPostalAddress();
```

- *Type:* java.lang.String

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-okta.user.User.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

---

##### `primaryPhone`<sup>Required</sup> <a name="primaryPhone" id="@cdktf/provider-okta.user.User.property.primaryPhone"></a>

```java
public java.lang.String getPrimaryPhone();
```

- *Type:* java.lang.String

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="@cdktf/provider-okta.user.User.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

---

##### `recoveryAnswer`<sup>Required</sup> <a name="recoveryAnswer" id="@cdktf/provider-okta.user.User.property.recoveryAnswer"></a>

```java
public java.lang.String getRecoveryAnswer();
```

- *Type:* java.lang.String

---

##### `recoveryQuestion`<sup>Required</sup> <a name="recoveryQuestion" id="@cdktf/provider-okta.user.User.property.recoveryQuestion"></a>

```java
public java.lang.String getRecoveryQuestion();
```

- *Type:* java.lang.String

---

##### `secondEmail`<sup>Required</sup> <a name="secondEmail" id="@cdktf/provider-okta.user.User.property.secondEmail"></a>

```java
public java.lang.String getSecondEmail();
```

- *Type:* java.lang.String

---

##### `skipRoles`<sup>Required</sup> <a name="skipRoles" id="@cdktf/provider-okta.user.User.property.skipRoles"></a>

```java
public java.lang.Object getSkipRoles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-okta.user.User.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.user.User.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-okta.user.User.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-okta.user.User.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.user.User.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.user.User.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-okta.user.User.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.User.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.user.User.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-okta.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.user.UserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user.UserConfig;

UserConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .email(java.lang.String)
    .firstName(java.lang.String)
    .lastName(java.lang.String)
    .login(java.lang.String)
//  .city(java.lang.String)
//  .costCenter(java.lang.String)
//  .countryCode(java.lang.String)
//  .customProfileAttributes(java.lang.String)
//  .customProfileAttributesToIgnore(java.util.List<java.lang.String>)
//  .department(java.lang.String)
//  .displayName(java.lang.String)
//  .division(java.lang.String)
//  .employeeNumber(java.lang.String)
//  .expirePasswordOnCreate(java.lang.Boolean)
//  .expirePasswordOnCreate(IResolvable)
//  .honorificPrefix(java.lang.String)
//  .honorificSuffix(java.lang.String)
//  .id(java.lang.String)
//  .locale(java.lang.String)
//  .manager(java.lang.String)
//  .managerId(java.lang.String)
//  .middleName(java.lang.String)
//  .mobilePhone(java.lang.String)
//  .nickName(java.lang.String)
//  .oldPassword(java.lang.String)
//  .organization(java.lang.String)
//  .password(java.lang.String)
//  .passwordHash(UserPasswordHash)
//  .passwordInlineHook(java.lang.String)
//  .postalAddress(java.lang.String)
//  .preferredLanguage(java.lang.String)
//  .primaryPhone(java.lang.String)
//  .profileUrl(java.lang.String)
//  .recoveryAnswer(java.lang.String)
//  .recoveryQuestion(java.lang.String)
//  .secondEmail(java.lang.String)
//  .skipRoles(java.lang.Boolean)
//  .skipRoles(IResolvable)
//  .state(java.lang.String)
//  .status(java.lang.String)
//  .streetAddress(java.lang.String)
//  .timezone(java.lang.String)
//  .title(java.lang.String)
//  .userType(java.lang.String)
//  .zipCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.email">email</a></code> | <code>java.lang.String</code> | User primary email address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.firstName">firstName</a></code> | <code>java.lang.String</code> | User first name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.lastName">lastName</a></code> | <code>java.lang.String</code> | User last name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.login">login</a></code> | <code>java.lang.String</code> | User Okta login. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.city">city</a></code> | <code>java.lang.String</code> | User city. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.costCenter">costCenter</a></code> | <code>java.lang.String</code> | User cost center. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | User country code. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.customProfileAttributes">customProfileAttributes</a></code> | <code>java.lang.String</code> | JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.customProfileAttributesToIgnore">customProfileAttributesToIgnore</a></code> | <code>java.util.List<java.lang.String></code> | List of custom_profile_attribute keys that should be excluded from being managed by Terraform. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.department">department</a></code> | <code>java.lang.String</code> | User department. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User display name, suitable to show end users. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.division">division</a></code> | <code>java.lang.String</code> | User division. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.employeeNumber">employeeNumber</a></code> | <code>java.lang.String</code> | User employee number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.expirePasswordOnCreate">expirePasswordOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to `true`, the user will have to change the password at the next login. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.honorificPrefix">honorificPrefix</a></code> | <code>java.lang.String</code> | User honorific prefix. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.honorificSuffix">honorificSuffix</a></code> | <code>java.lang.String</code> | User honorific suffix. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.locale">locale</a></code> | <code>java.lang.String</code> | User default location. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.manager">manager</a></code> | <code>java.lang.String</code> | Manager of User. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.managerId">managerId</a></code> | <code>java.lang.String</code> | Manager ID of User. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.middleName">middleName</a></code> | <code>java.lang.String</code> | User middle name. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.mobilePhone">mobilePhone</a></code> | <code>java.lang.String</code> | User mobile phone number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.nickName">nickName</a></code> | <code>java.lang.String</code> | User nickname. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.oldPassword">oldPassword</a></code> | <code>java.lang.String</code> | Old User Password. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | User organization. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.password">password</a></code> | <code>java.lang.String</code> | User Password. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.passwordHash">passwordHash</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | password_hash block. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.passwordInlineHook">passwordInlineHook</a></code> | <code>java.lang.String</code> | Specifies that a Password Import Inline Hook should be triggered to handle verification of the user's password the first time the user logs in. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.postalAddress">postalAddress</a></code> | <code>java.lang.String</code> | User mailing address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | User preferred language. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.primaryPhone">primaryPhone</a></code> | <code>java.lang.String</code> | User primary phone number. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | User online profile (web page). |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.recoveryAnswer">recoveryAnswer</a></code> | <code>java.lang.String</code> | User Password Recovery Answer. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.recoveryQuestion">recoveryQuestion</a></code> | <code>java.lang.String</code> | User Password Recovery Question. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.secondEmail">secondEmail</a></code> | <code>java.lang.String</code> | User secondary email address, used for account recovery. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.skipRoles">skipRoles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.state">state</a></code> | <code>java.lang.String</code> | User state or region. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.status">status</a></code> | <code>java.lang.String</code> | User profile property. Valid values are `ACTIVE`, `DEPROVISIONED`, `STAGED`, `SUSPENDED`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | User street address. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | User default timezone. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.title">title</a></code> | <code>java.lang.String</code> | User title. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.userType">userType</a></code> | <code>java.lang.String</code> | User employee type. |
| <code><a href="#@cdktf/provider-okta.user.UserConfig.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | User zipcode or postal code. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.user.UserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.user.UserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.user.UserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.user.UserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.user.UserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.user.UserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.user.UserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.user.UserConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

User primary email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#email User#email}

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-okta.user.UserConfig.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

User first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#first_name User#first_name}

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-okta.user.UserConfig.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

User last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#last_name User#last_name}

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.user.UserConfig.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

User Okta login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#login User#login}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-okta.user.UserConfig.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

User city.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#city User#city}

---

##### `costCenter`<sup>Optional</sup> <a name="costCenter" id="@cdktf/provider-okta.user.UserConfig.property.costCenter"></a>

```java
public java.lang.String getCostCenter();
```

- *Type:* java.lang.String

User cost center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#cost_center User#cost_center}

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-okta.user.UserConfig.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

User country code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#country_code User#country_code}

---

##### `customProfileAttributes`<sup>Optional</sup> <a name="customProfileAttributes" id="@cdktf/provider-okta.user.UserConfig.property.customProfileAttributes"></a>

```java
public java.lang.String getCustomProfileAttributes();
```

- *Type:* java.lang.String

JSON formatted custom attributes for a user. It must be JSON due to various types Okta allows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#custom_profile_attributes User#custom_profile_attributes}

---

##### `customProfileAttributesToIgnore`<sup>Optional</sup> <a name="customProfileAttributesToIgnore" id="@cdktf/provider-okta.user.UserConfig.property.customProfileAttributesToIgnore"></a>

```java
public java.util.List<java.lang.String> getCustomProfileAttributesToIgnore();
```

- *Type:* java.util.List<java.lang.String>

List of custom_profile_attribute keys that should be excluded from being managed by Terraform.

This is useful in situations where specific custom fields may contain sensitive information and should be managed outside of Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#custom_profile_attributes_to_ignore User#custom_profile_attributes_to_ignore}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-okta.user.UserConfig.property.department"></a>

```java
public java.lang.String getDepartment();
```

- *Type:* java.lang.String

User department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#department User#department}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-okta.user.UserConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User display name, suitable to show end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#display_name User#display_name}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-okta.user.UserConfig.property.division"></a>

```java
public java.lang.String getDivision();
```

- *Type:* java.lang.String

User division.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#division User#division}

---

##### `employeeNumber`<sup>Optional</sup> <a name="employeeNumber" id="@cdktf/provider-okta.user.UserConfig.property.employeeNumber"></a>

```java
public java.lang.String getEmployeeNumber();
```

- *Type:* java.lang.String

User employee number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#employee_number User#employee_number}

---

##### `expirePasswordOnCreate`<sup>Optional</sup> <a name="expirePasswordOnCreate" id="@cdktf/provider-okta.user.UserConfig.property.expirePasswordOnCreate"></a>

```java
public java.lang.Object getExpirePasswordOnCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to `true`, the user will have to change the password at the next login.

This property will be used when user is being created and works only when `password` field is set. Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#expire_password_on_create User#expire_password_on_create}

---

##### `honorificPrefix`<sup>Optional</sup> <a name="honorificPrefix" id="@cdktf/provider-okta.user.UserConfig.property.honorificPrefix"></a>

```java
public java.lang.String getHonorificPrefix();
```

- *Type:* java.lang.String

User honorific prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#honorific_prefix User#honorific_prefix}

---

##### `honorificSuffix`<sup>Optional</sup> <a name="honorificSuffix" id="@cdktf/provider-okta.user.UserConfig.property.honorificSuffix"></a>

```java
public java.lang.String getHonorificSuffix();
```

- *Type:* java.lang.String

User honorific suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#honorific_suffix User#honorific_suffix}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.user.UserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-okta.user.UserConfig.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

User default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#locale User#locale}

---

##### `manager`<sup>Optional</sup> <a name="manager" id="@cdktf/provider-okta.user.UserConfig.property.manager"></a>

```java
public java.lang.String getManager();
```

- *Type:* java.lang.String

Manager of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#manager User#manager}

---

##### `managerId`<sup>Optional</sup> <a name="managerId" id="@cdktf/provider-okta.user.UserConfig.property.managerId"></a>

```java
public java.lang.String getManagerId();
```

- *Type:* java.lang.String

Manager ID of User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#manager_id User#manager_id}

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="@cdktf/provider-okta.user.UserConfig.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

User middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#middle_name User#middle_name}

---

##### `mobilePhone`<sup>Optional</sup> <a name="mobilePhone" id="@cdktf/provider-okta.user.UserConfig.property.mobilePhone"></a>

```java
public java.lang.String getMobilePhone();
```

- *Type:* java.lang.String

User mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `nickName`<sup>Optional</sup> <a name="nickName" id="@cdktf/provider-okta.user.UserConfig.property.nickName"></a>

```java
public java.lang.String getNickName();
```

- *Type:* java.lang.String

User nickname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#nick_name User#nick_name}

---

##### `oldPassword`<sup>Optional</sup> <a name="oldPassword" id="@cdktf/provider-okta.user.UserConfig.property.oldPassword"></a>

```java
public java.lang.String getOldPassword();
```

- *Type:* java.lang.String

Old User Password.

Should be only set in case the password was not changed using the provider. fter successful password change this field should be removed and `password` field should be used for further changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#old_password User#old_password}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-okta.user.UserConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

User organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#organization User#organization}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.user.UserConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

User Password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#password User#password}

---

##### `passwordHash`<sup>Optional</sup> <a name="passwordHash" id="@cdktf/provider-okta.user.UserConfig.property.passwordHash"></a>

```java
public UserPasswordHash getPasswordHash();
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

password_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#password_hash User#password_hash}

---

##### `passwordInlineHook`<sup>Optional</sup> <a name="passwordInlineHook" id="@cdktf/provider-okta.user.UserConfig.property.passwordInlineHook"></a>

```java
public java.lang.String getPasswordInlineHook();
```

- *Type:* java.lang.String

Specifies that a Password Import Inline Hook should be triggered to handle verification of the user's password the first time the user logs in.

This allows an existing password to be imported into Okta directly from some other store. When updating a user with a password hook the user must be in the `STAGED` status. The `password` field should not be specified when using Password Import Inline Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#password_inline_hook User#password_inline_hook}

---

##### `postalAddress`<sup>Optional</sup> <a name="postalAddress" id="@cdktf/provider-okta.user.UserConfig.property.postalAddress"></a>

```java
public java.lang.String getPostalAddress();
```

- *Type:* java.lang.String

User mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#postal_address User#postal_address}

---

##### `preferredLanguage`<sup>Optional</sup> <a name="preferredLanguage" id="@cdktf/provider-okta.user.UserConfig.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

User preferred language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#preferred_language User#preferred_language}

---

##### `primaryPhone`<sup>Optional</sup> <a name="primaryPhone" id="@cdktf/provider-okta.user.UserConfig.property.primaryPhone"></a>

```java
public java.lang.String getPrimaryPhone();
```

- *Type:* java.lang.String

User primary phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#primary_phone User#primary_phone}

---

##### `profileUrl`<sup>Optional</sup> <a name="profileUrl" id="@cdktf/provider-okta.user.UserConfig.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

User online profile (web page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#profile_url User#profile_url}

---

##### `recoveryAnswer`<sup>Optional</sup> <a name="recoveryAnswer" id="@cdktf/provider-okta.user.UserConfig.property.recoveryAnswer"></a>

```java
public java.lang.String getRecoveryAnswer();
```

- *Type:* java.lang.String

User Password Recovery Answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#recovery_answer User#recovery_answer}

---

##### `recoveryQuestion`<sup>Optional</sup> <a name="recoveryQuestion" id="@cdktf/provider-okta.user.UserConfig.property.recoveryQuestion"></a>

```java
public java.lang.String getRecoveryQuestion();
```

- *Type:* java.lang.String

User Password Recovery Question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#recovery_question User#recovery_question}

---

##### `secondEmail`<sup>Optional</sup> <a name="secondEmail" id="@cdktf/provider-okta.user.UserConfig.property.secondEmail"></a>

```java
public java.lang.String getSecondEmail();
```

- *Type:* java.lang.String

User secondary email address, used for account recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#second_email User#second_email}

---

##### `skipRoles`<sup>Optional</sup> <a name="skipRoles" id="@cdktf/provider-okta.user.UserConfig.property.skipRoles"></a>

```java
public java.lang.Object getSkipRoles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#skip_roles User#skip_roles}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-okta.user.UserConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

User state or region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#state User#state}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.user.UserConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

User profile property. Valid values are `ACTIVE`, `DEPROVISIONED`, `STAGED`, `SUSPENDED`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#status User#status}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-okta.user.UserConfig.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

User street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#street_address User#street_address}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-okta.user.UserConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

User default timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#timezone User#timezone}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-okta.user.UserConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

User title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#title User#title}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.user.UserConfig.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

User employee type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#user_type User#user_type}

---

##### `zipCode`<sup>Optional</sup> <a name="zipCode" id="@cdktf/provider-okta.user.UserConfig.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

User zipcode or postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#zip_code User#zip_code}

---

### UserPasswordHash <a name="UserPasswordHash" id="@cdktf/provider-okta.user.UserPasswordHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.user.UserPasswordHash.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user.UserPasswordHash;

UserPasswordHash.builder()
    .algorithm(java.lang.String)
    .value(java.lang.String)
//  .salt(java.lang.String)
//  .saltOrder(java.lang.String)
//  .workFactor(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | The algorithm used to generate the hash using the password. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.value">value</a></code> | <code>java.lang.String</code> | For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used). |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.salt">salt</a></code> | <code>java.lang.String</code> | Only required for salted hashes. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.saltOrder">saltOrder</a></code> | <code>java.lang.String</code> | Specifies whether salt was pre- or postfixed to the password before hashing. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHash.property.workFactor">workFactor</a></code> | <code>java.lang.Number</code> | Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-okta.user.UserPasswordHash.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

The algorithm used to generate the hash using the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#algorithm User#algorithm}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.UserPasswordHash.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

For SHA-512, SHA-256, SHA-1, MD5, This is the actual base64-encoded hash of the password (and salt, if used).

This is the Base64 encoded value of the SHA-512/SHA-256/SHA-1/MD5 digest that was computed by either pre-fixing or post-fixing the salt to the password, depending on the saltOrder. If a salt was not used in the source system, then this should just be the the Base64 encoded value of the password's SHA-512/SHA-256/SHA-1/MD5 digest. For BCRYPT, This is the actual radix64-encoded hashed password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#value User#value}

---

##### `salt`<sup>Optional</sup> <a name="salt" id="@cdktf/provider-okta.user.UserPasswordHash.property.salt"></a>

```java
public java.lang.String getSalt();
```

- *Type:* java.lang.String

Only required for salted hashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#salt User#salt}

---

##### `saltOrder`<sup>Optional</sup> <a name="saltOrder" id="@cdktf/provider-okta.user.UserPasswordHash.property.saltOrder"></a>

```java
public java.lang.String getSaltOrder();
```

- *Type:* java.lang.String

Specifies whether salt was pre- or postfixed to the password before hashing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#salt_order User#salt_order}

---

##### `workFactor`<sup>Optional</sup> <a name="workFactor" id="@cdktf/provider-okta.user.UserPasswordHash.property.workFactor"></a>

```java
public java.lang.Number getWorkFactor();
```

- *Type:* java.lang.Number

Governs the strength of the hash and the time required to compute it. Only required for BCRYPT algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/user#work_factor User#work_factor}

---

## Classes <a name="Classes" id="Classes"></a>

### UserPasswordHashOutputReference <a name="UserPasswordHashOutputReference" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.user.UserPasswordHashOutputReference;

new UserPasswordHashOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSalt">resetSalt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSaltOrder">resetSaltOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetWorkFactor">resetWorkFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSalt` <a name="resetSalt" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSalt"></a>

```java
public void resetSalt()
```

##### `resetSaltOrder` <a name="resetSaltOrder" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetSaltOrder"></a>

```java
public void resetSaltOrder()
```

##### `resetWorkFactor` <a name="resetWorkFactor" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.resetWorkFactor"></a>

```java
public void resetWorkFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltInput">saltInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrderInput">saltOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactorInput">workFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.salt">salt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrder">saltOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactor">workFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `saltInput`<sup>Optional</sup> <a name="saltInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltInput"></a>

```java
public java.lang.String getSaltInput();
```

- *Type:* java.lang.String

---

##### `saltOrderInput`<sup>Optional</sup> <a name="saltOrderInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrderInput"></a>

```java
public java.lang.String getSaltOrderInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `workFactorInput`<sup>Optional</sup> <a name="workFactorInput" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactorInput"></a>

```java
public java.lang.Number getWorkFactorInput();
```

- *Type:* java.lang.Number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `salt`<sup>Required</sup> <a name="salt" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.salt"></a>

```java
public java.lang.String getSalt();
```

- *Type:* java.lang.String

---

##### `saltOrder`<sup>Required</sup> <a name="saltOrder" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.saltOrder"></a>

```java
public java.lang.String getSaltOrder();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `workFactor`<sup>Required</sup> <a name="workFactor" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.workFactor"></a>

```java
public java.lang.Number getWorkFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.user.UserPasswordHashOutputReference.property.internalValue"></a>

```java
public UserPasswordHash getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.user.UserPasswordHash">UserPasswordHash</a>

---



