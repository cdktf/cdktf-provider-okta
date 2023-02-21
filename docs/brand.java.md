# `brand` Submodule <a name="`brand` Submodule" id="@cdktf/provider-okta.brand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Brand <a name="Brand" id="@cdktf/provider-okta.brand.Brand"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/brand okta_brand}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.brand.Brand.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.brand.Brand;

Brand.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .agreeToCustomPrivacyPolicy(java.lang.Boolean)
//  .agreeToCustomPrivacyPolicy(IResolvable)
//  .brandId(java.lang.String)
//  .customPrivacyPolicyUrl(java.lang.String)
//  .removePoweredByOkta(java.lang.Boolean)
//  .removePoweredByOkta(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.agreeToCustomPrivacyPolicy">agreeToCustomPrivacyPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Consent for updating the custom privacy policy URL. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.brandId">brandId</a></code> | <code>java.lang.String</code> | Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.customPrivacyPolicyUrl">customPrivacyPolicyUrl</a></code> | <code>java.lang.String</code> | Custom privacy policy URL. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.Initializer.parameter.removePoweredByOkta">removePoweredByOkta</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agreeToCustomPrivacyPolicy`<sup>Optional</sup> <a name="agreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.agreeToCustomPrivacyPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Consent for updating the custom privacy policy URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#agree_to_custom_privacy_policy Brand#agree_to_custom_privacy_policy}

---

##### `brandId`<sup>Optional</sup> <a name="brandId" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.brandId"></a>

- *Type:* java.lang.String

Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source.

Do this by setting brand_id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#brand_id Brand#brand_id}

---

##### `customPrivacyPolicyUrl`<sup>Optional</sup> <a name="customPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.customPrivacyPolicyUrl"></a>

- *Type:* java.lang.String

Custom privacy policy URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#custom_privacy_policy_url Brand#custom_privacy_policy_url}

---

##### `removePoweredByOkta`<sup>Optional</sup> <a name="removePoweredByOkta" id="@cdktf/provider-okta.brand.Brand.Initializer.parameter.removePoweredByOkta"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#remove_powered_by_okta Brand#remove_powered_by_okta}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetAgreeToCustomPrivacyPolicy">resetAgreeToCustomPrivacyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetBrandId">resetBrandId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetCustomPrivacyPolicyUrl">resetCustomPrivacyPolicyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.resetRemovePoweredByOkta">resetRemovePoweredByOkta</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.brand.Brand.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.brand.Brand.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.brand.Brand.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.brand.Brand.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.brand.Brand.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.brand.Brand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.brand.Brand.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.brand.Brand.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.brand.Brand.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.brand.Brand.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.brand.Brand.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.brand.Brand.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.brand.Brand.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.brand.Brand.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.brand.Brand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAgreeToCustomPrivacyPolicy` <a name="resetAgreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.Brand.resetAgreeToCustomPrivacyPolicy"></a>

```java
public void resetAgreeToCustomPrivacyPolicy()
```

##### `resetBrandId` <a name="resetBrandId" id="@cdktf/provider-okta.brand.Brand.resetBrandId"></a>

```java
public void resetBrandId()
```

##### `resetCustomPrivacyPolicyUrl` <a name="resetCustomPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.Brand.resetCustomPrivacyPolicyUrl"></a>

```java
public void resetCustomPrivacyPolicyUrl()
```

##### `resetRemovePoweredByOkta` <a name="resetRemovePoweredByOkta" id="@cdktf/provider-okta.brand.Brand.resetRemovePoweredByOkta"></a>

```java
public void resetRemovePoweredByOkta()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.brand.Brand.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.brand.Brand;

Brand.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.brand.Brand.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.brand.Brand.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.brand.Brand;

Brand.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.brand.Brand.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.brand.Brand.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.brand.Brand;

Brand.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.brand.Brand.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.links">links</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicyInput">agreeToCustomPrivacyPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.brandIdInput">brandIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrlInput">customPrivacyPolicyUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.removePoweredByOktaInput">removePoweredByOktaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicy">agreeToCustomPrivacyPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.brandId">brandId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrl">customPrivacyPolicyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.removePoweredByOkta">removePoweredByOkta</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.brand.Brand.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.brand.Brand.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.brand.Brand.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.brand.Brand.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.brand.Brand.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.brand.Brand.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.brand.Brand.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.brand.Brand.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.brand.Brand.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.brand.Brand.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.brand.Brand.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.brand.Brand.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.Brand.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.brand.Brand.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.brand.Brand.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.brand.Brand.property.links"></a>

```java
public java.lang.String getLinks();
```

- *Type:* java.lang.String

---

##### `agreeToCustomPrivacyPolicyInput`<sup>Optional</sup> <a name="agreeToCustomPrivacyPolicyInput" id="@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicyInput"></a>

```java
public java.lang.Object getAgreeToCustomPrivacyPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `brandIdInput`<sup>Optional</sup> <a name="brandIdInput" id="@cdktf/provider-okta.brand.Brand.property.brandIdInput"></a>

```java
public java.lang.String getBrandIdInput();
```

- *Type:* java.lang.String

---

##### `customPrivacyPolicyUrlInput`<sup>Optional</sup> <a name="customPrivacyPolicyUrlInput" id="@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrlInput"></a>

```java
public java.lang.String getCustomPrivacyPolicyUrlInput();
```

- *Type:* java.lang.String

---

##### `removePoweredByOktaInput`<sup>Optional</sup> <a name="removePoweredByOktaInput" id="@cdktf/provider-okta.brand.Brand.property.removePoweredByOktaInput"></a>

```java
public java.lang.Object getRemovePoweredByOktaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `agreeToCustomPrivacyPolicy`<sup>Required</sup> <a name="agreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.Brand.property.agreeToCustomPrivacyPolicy"></a>

```java
public java.lang.Object getAgreeToCustomPrivacyPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.brand.Brand.property.brandId"></a>

```java
public java.lang.String getBrandId();
```

- *Type:* java.lang.String

---

##### `customPrivacyPolicyUrl`<sup>Required</sup> <a name="customPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.Brand.property.customPrivacyPolicyUrl"></a>

```java
public java.lang.String getCustomPrivacyPolicyUrl();
```

- *Type:* java.lang.String

---

##### `removePoweredByOkta`<sup>Required</sup> <a name="removePoweredByOkta" id="@cdktf/provider-okta.brand.Brand.property.removePoweredByOkta"></a>

```java
public java.lang.Object getRemovePoweredByOkta();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.Brand.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.brand.Brand.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BrandConfig <a name="BrandConfig" id="@cdktf/provider-okta.brand.BrandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.brand.BrandConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.brand.BrandConfig;

BrandConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .agreeToCustomPrivacyPolicy(java.lang.Boolean)
//  .agreeToCustomPrivacyPolicy(IResolvable)
//  .brandId(java.lang.String)
//  .customPrivacyPolicyUrl(java.lang.String)
//  .removePoweredByOkta(java.lang.Boolean)
//  .removePoweredByOkta(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.agreeToCustomPrivacyPolicy">agreeToCustomPrivacyPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Consent for updating the custom privacy policy URL. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.brandId">brandId</a></code> | <code>java.lang.String</code> | Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.customPrivacyPolicyUrl">customPrivacyPolicyUrl</a></code> | <code>java.lang.String</code> | Custom privacy policy URL. |
| <code><a href="#@cdktf/provider-okta.brand.BrandConfig.property.removePoweredByOkta">removePoweredByOkta</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.brand.BrandConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.brand.BrandConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.brand.BrandConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.brand.BrandConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.brand.BrandConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.brand.BrandConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.brand.BrandConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agreeToCustomPrivacyPolicy`<sup>Optional</sup> <a name="agreeToCustomPrivacyPolicy" id="@cdktf/provider-okta.brand.BrandConfig.property.agreeToCustomPrivacyPolicy"></a>

```java
public java.lang.Object getAgreeToCustomPrivacyPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Consent for updating the custom privacy policy URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#agree_to_custom_privacy_policy Brand#agree_to_custom_privacy_policy}

---

##### `brandId`<sup>Optional</sup> <a name="brandId" id="@cdktf/provider-okta.brand.BrandConfig.property.brandId"></a>

```java
public java.lang.String getBrandId();
```

- *Type:* java.lang.String

Brand ID - Note: Okta API for brands only reads and updates therefore the okta_brand resource needs to act as a quasi data source.

Do this by setting brand_id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#brand_id Brand#brand_id}

---

##### `customPrivacyPolicyUrl`<sup>Optional</sup> <a name="customPrivacyPolicyUrl" id="@cdktf/provider-okta.brand.BrandConfig.property.customPrivacyPolicyUrl"></a>

```java
public java.lang.String getCustomPrivacyPolicyUrl();
```

- *Type:* java.lang.String

Custom privacy policy URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#custom_privacy_policy_url Brand#custom_privacy_policy_url}

---

##### `removePoweredByOkta`<sup>Optional</sup> <a name="removePoweredByOkta" id="@cdktf/provider-okta.brand.BrandConfig.property.removePoweredByOkta"></a>

```java
public java.lang.Object getRemovePoweredByOkta();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Removes "Powered by Okta" from the Okta-hosted sign-in page and "© 2021 Okta, Inc." from the Okta End-User Dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/brand#remove_powered_by_okta Brand#remove_powered_by_okta}

---



