# `appOauthPostLogoutRedirectUri` Submodule <a name="`appOauthPostLogoutRedirectUri` Submodule" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppOauthPostLogoutRedirectUri <a name="AppOauthPostLogoutRedirectUri" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_post_logout_redirect_uri okta_app_oauth_post_logout_redirect_uri}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth_post_logout_redirect_uri.AppOauthPostLogoutRedirectUri;

AppOauthPostLogoutRedirectUri.Builder.create(Construct scope, java.lang.String id)
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
    .appId(java.lang.String)
    .uri(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | OAuth application ID. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.uri">uri</a></code> | <code>java.lang.String</code> | Post Logout Redirect URI to append to Okta OIDC application. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_post_logout_redirect_uri#id AppOauthPostLogoutRedirectUri#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

OAuth application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_post_logout_redirect_uri#app_id AppOauthPostLogoutRedirectUri#app_id}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.uri"></a>

- *Type:* java.lang.String

Post Logout Redirect URI to append to Okta OIDC application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_post_logout_redirect_uri#uri AppOauthPostLogoutRedirectUri#uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_post_logout_redirect_uri#id AppOauthPostLogoutRedirectUri#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppOauthPostLogoutRedirectUri resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth_post_logout_redirect_uri.AppOauthPostLogoutRedirectUri;

AppOauthPostLogoutRedirectUri.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth_post_logout_redirect_uri.AppOauthPostLogoutRedirectUri;

AppOauthPostLogoutRedirectUri.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth_post_logout_redirect_uri.AppOauthPostLogoutRedirectUri;

AppOauthPostLogoutRedirectUri.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth_post_logout_redirect_uri.AppOauthPostLogoutRedirectUri;

AppOauthPostLogoutRedirectUri.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppOauthPostLogoutRedirectUri.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppOauthPostLogoutRedirectUri resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppOauthPostLogoutRedirectUri to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppOauthPostLogoutRedirectUri that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_post_logout_redirect_uri#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppOauthPostLogoutRedirectUri to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUri.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppOauthPostLogoutRedirectUriConfig <a name="AppOauthPostLogoutRedirectUriConfig" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth_post_logout_redirect_uri.AppOauthPostLogoutRedirectUriConfig;

AppOauthPostLogoutRedirectUriConfig.builder()
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
    .appId(java.lang.String)
    .uri(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | OAuth application ID. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.uri">uri</a></code> | <code>java.lang.String</code> | Post Logout Redirect URI to append to Okta OIDC application. |
| <code><a href="#@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_post_logout_redirect_uri#id AppOauthPostLogoutRedirectUri#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

OAuth application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_post_logout_redirect_uri#app_id AppOauthPostLogoutRedirectUri#app_id}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Post Logout Redirect URI to append to Okta OIDC application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_post_logout_redirect_uri#uri AppOauthPostLogoutRedirectUri#uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appOauthPostLogoutRedirectUri.AppOauthPostLogoutRedirectUriConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_oauth_post_logout_redirect_uri#id AppOauthPostLogoutRedirectUri#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



